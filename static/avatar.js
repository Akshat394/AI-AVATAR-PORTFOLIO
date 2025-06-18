import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf8f9fa);

// Camera setup
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1.6, 3);
camera.lookAt(0, 1, 0);

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth / 2, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
document.getElementById('avatar').appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 2, 1);
directionalLight.castShadow = true;
scene.add(directionalLight);

// Add a subtle point light for better depth
const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(-1, 1, 1);
scene.add(pointLight);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 2;
controls.maxDistance = 5;
controls.maxPolarAngle = Math.PI / 2;
controls.target.set(0, 1, 0);

// Animation mixer
let mixer;
let model;
let currentAnimation = null;

// Load the model
const loader = new GLTFLoader();
const loadingElement = document.getElementById('loading');

loader.load(
    '/static/6826347987b7e53e29d3aa8d (1).glb',
    (gltf) => {
        console.log('Model loaded successfully:', gltf);
        console.log('Model structure:', gltf.scene);
        
        model = gltf.scene;
        
        // Center and scale the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 1.8 / maxDim;
        model.scale.multiplyScalar(scale);
        
        // Position the model slightly above ground
        model.position.y = 0;
        
        scene.add(model);
        
        // Setup animations
        mixer = new THREE.AnimationMixer(model);
        
        // Create basic animations using object transformations
        const basicAnimations = [];
        
        // Wave animation - rotate the entire model
        const waveTrack = new THREE.KeyframeTrack(
            '.rotation[y]',
            [0, 0.5, 1],
            [0, Math.PI / 6, 0]
        );
        const waveClip = new THREE.AnimationClip('Wave', 1, [waveTrack]);
        basicAnimations.push(waveClip);
        
        // Nod animation - tilt the model forward and back
        const nodTrack = new THREE.KeyframeTrack(
            '.rotation[x]',
            [0, 0.25, 0.5, 0.75, 1],
            [0, Math.PI / 16, 0, Math.PI / 16, 0]
        );
        const nodClip = new THREE.AnimationClip('Nod', 1, [nodTrack]);
        basicAnimations.push(nodClip);
        
        // Point animation - move the model slightly forward
        const pointTrack = new THREE.KeyframeTrack(
            '.position[z]',
            [0, 0.5, 1],
            [0, 0.15, 0]
        );
        const pointClip = new THREE.AnimationClip('Point', 1, [pointTrack]);
        basicAnimations.push(pointClip);
        
        // Dance animation - combine rotation and position
        const danceTracks = [
            new THREE.KeyframeTrack(
                '.rotation[y]',
                [0, 0.25, 0.5, 0.75, 1],
                [0, Math.PI / 6, 0, -Math.PI / 6, 0]
            ),
            new THREE.KeyframeTrack(
                '.position[y]',
                [0, 0.25, 0.5, 0.75, 1],
                [0, 0.05, 0, 0.05, 0]
            )
        ];
        const danceClip = new THREE.AnimationClip('Dance', 1, danceTracks);
        basicAnimations.push(danceClip);
        
        // Store the basic animations
        window.availableAnimations = basicAnimations;
        
        // Play the first animation as idle
        const idleAction = mixer.clipAction(basicAnimations[0]);
        idleAction.play();
        currentAnimation = idleAction;
        
        loadingElement.style.display = 'none';
    },
    (xhr) => {
        const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
        loadingElement.textContent = `Loading ${percent}%`;
    },
    (error) => {
        console.error('Error loading model:', error);
        loadingElement.textContent = 'Error loading model';
    }
);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    if (mixer) {
        mixer.update(0.016);
    }
    
    controls.update();
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
});

// Export functions for external use
export function playAnimation(name, loop = false) {
    if (!mixer) {
        console.warn('Animation mixer not initialized');
        return;
    }
    
    console.log('Attempting to play animation:', name);
    console.log('Available animations:', window.availableAnimations?.map(a => a.name));
    
    if (currentAnimation) {
        currentAnimation.fadeOut(0.5);
    }
    
    // Find the animation by name
    const animation = window.availableAnimations?.find(a => 
        a.name.toLowerCase() === name.toLowerCase() ||
        a.name.toLowerCase().includes(name.toLowerCase())
    );
    
    if (!animation) {
        console.warn('Animation not found:', name);
        return;
    }
    
    const action = mixer.clipAction(animation);
    action.reset();
    action.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce);
    action.clampWhenFinished = true;
    action.fadeIn(0.5);
    action.play();
    
    console.log('Playing animation:', animation.name);
    currentAnimation = action;
}

export function triggerGesture(type) {
    console.log('Triggering gesture:', type);
    
    const gestures = {
        wave: { name: 'Wave', duration: 1000 },
        nod: { name: 'Nod', duration: 1000 },
        dance: { name: 'Dance', duration: 2000 },
        point: { name: 'Point', duration: 1000 }
    };
    
    const gesture = gestures[type];
    if (gesture) {
        console.log('Playing gesture:', gesture.name);
        playAnimation(gesture.name, false);
        
        setTimeout(() => {
            console.log('Returning to idle animation');
            playAnimation('Wave', true); // Use Wave as the idle animation
        }, gesture.duration);
    } else {
        console.warn('Unknown gesture type:', type);
    }
} 