const fs = require('fs');

// Read the CSS file
const cssPath = './src/app/globals.css';
let content = fs.readFileSync(cssPath, 'utf8');

// Fix align-items: start; to align-items: flex-start;
content = content.replace(/align-items:\s*start;/g, 'align-items: flex-start;');

// Fix justify-content: start; to justify-content: flex-start;
content = content.replace(/justify-content:\s*start;/g, 'justify-content: flex-start;');

// Write back to file
fs.writeFileSync(cssPath, content);

console.log('✅ CSS autoprefixer warnings fixed!');
console.log('📝 Changes made:');
console.log('- align-items: start; → align-items: flex-start;');
console.log('- justify-content: start; → justify-content: flex-start;'); 