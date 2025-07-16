import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  // Runtime check for NaN positions in geometry
  React.useEffect(() => {
    computer.scene.traverse((child) => {
      if (child.isMesh) {
        // Fallback: If material is missing, assign a basic MeshStandardMaterial
        if (!child.material) {
          const { MeshStandardMaterial } = require('three');
          child.material = new MeshStandardMaterial({ color: 0xcccccc });
        }
        // Ensure texture encoding is sRGB for correct color
        if (child.material && child.material.map) {
          child.material.map.encoding = THREE.sRGBEncoding;
        }
        console.log(`Mesh: ${child.name}`, child.material);
        if (child.material && child.material.map) {
          console.log(`  Texture map:`, child.material.map);
        }
      }
      if (child.isMesh && child.geometry) {
        const pos = child.geometry.attributes.position;
        if (pos) {
          for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const y = pos.getY(i);
            const z = pos.getZ(i);
            if (isNaN(x) || isNaN(y) || isNaN(z)) {
              console.error(`NaN detected in geometry positions of mesh: ${child.name}`);
              break;
            }
          }
        }
      }
    });
  }, [computer]);

  return (
    <>
      <ambientLight intensity={0.8} />
      <hemisphereLight intensity={0.4} groundColor="black" />
      <directionalLight
        position={[0, 10, 10]}
        intensity={1.5}
        castShadow
        shadow-mapSize={2048}
      />
      <spotLight
        position={[0, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.8}
        castShadow
        shadow-mapSize={2048}
      />
      <pointLight intensity={1.8} position={[-5, 2, 0]} /> {/* Left speaker fill */}
      <pointLight intensity={1.8} position={[5, 2, 0]} /> {/* Right speaker fill */}
      <pointLight intensity={1.5} position={[2, 4, 6]} /> {/* CPU fill */}
      <Environment preset="city" />
      <primitive
        object={computer.scene}
        scale={1.2}
        position={[0, -2.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Don't render on mobile screens
  if (isMobile) {
    return null;
  }

  return (
    <div className="relative w-full h-[80vh]">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, outputEncoding: THREE.sRGBEncoding }}
        className="w-full h-full"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate={true}
            autoRotateSpeed={2}
          />
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
