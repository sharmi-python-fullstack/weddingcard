const fs = require('fs');
const path = require('path');

const cleanDir = path.join(__dirname, '..', 'src', 'assets', 'clean_images');
const files = fs.readdirSync(cleanDir);

let content = '// Auto-generated asset map\n';
const exportsList = [];

files.forEach((f, i) => {
  const safeVar = 'img_' + i + '_' + f.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9]/g, '_').substring(0, 24);
  content += `import ${safeVar} from './clean_images/${f}';\n`;
  exportsList.push({ key: f, safeVar });
});

content += '\nexport const IMAGES = {\n';
exportsList.forEach(item => {
  content += `  '${item.key}': ${item.safeVar},\n`;
});
content += '};\n\nexport default IMAGES;\n';

fs.writeFileSync(path.join(__dirname, '..', 'src', 'assets', 'assets.js'), content);
console.log('Successfully generated assets.js with', exportsList.length, 'images');
