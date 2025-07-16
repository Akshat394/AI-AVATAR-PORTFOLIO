// Auto-import all icons from the tech folder
const modules = import.meta.glob('../assets/tech/*.{png,svg,jpg,jpeg,webp}', { eager: true });

const icons = {};
for (const path in modules) {
  // Extract the filename without extension as the key
  const name = path.split('/').pop().split('.')[0];
  icons[name] = modules[path].default;
}

export default icons; 