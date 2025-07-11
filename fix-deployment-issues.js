const fs = require('fs');
const path = require('path');

// Function to recursively find all JS and CSS files
function findFiles(dir, extensions) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      results = results.concat(findFiles(filePath, extensions));
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Fix unescaped entities in JS files
function fixUnescapedEntities(content) {
  return content
    // Fix apostrophes in contractions and possessives
    .replace(/(?<=\w)'s\b/g, '&apos;s')
    .replace(/(?<=\w)'re\b/g, '&apos;re')
    .replace(/(?<=\w)'ll\b/g, '&apos;ll')
    .replace(/(?<=\w)'ve\b/g, '&apos;ve')
    .replace(/(?<=\w)'d\b/g, '&apos;d')
    .replace(/(?<=\w)'t\b/g, '&apos;t')
    .replace(/(?<=\w)'m\b/g, '&apos;m')
    .replace(/(?<=\w)'re\b/g, '&apos;re')
    // Fix standalone apostrophes
    .replace(/(?<=\s)'/g, '&apos;')
    // Fix quotes in specific contexts
    .replace(/(?<=\s)"(?=\w)/g, '&quot;')
    .replace(/(?<=\w)"(?=\s)/g, '&quot;');
}

// Fix missing alt attributes
function fixMissingAlt(content) {
  return content.replace(
    /<img([^>]*?)(?<!alt=)[^>]*>/g,
    (match, p1) => {
      if (!p1.includes('alt=')) {
        return `<img${p1} alt="" />`;
      }
      return match;
    }
  );
}

// Fix missing key props in map functions
function fixMissingKeys(content) {
  return content.replace(
    /\.map\(\([^)]+\)\s*=>\s*\(/g,
    (match) => {
      // Check if the next line has a key prop
      const lines = content.split('\n');
      const matchIndex = content.indexOf(match);
      const lineNumber = content.substring(0, matchIndex).split('\n').length;
      
      // Look for the opening div or element after the map
      for (let i = lineNumber; i < Math.min(lineNumber + 10, lines.length); i++) {
        if (lines[i].includes('<div') && !lines[i].includes('key=')) {
          // Add key prop
          lines[i] = lines[i].replace(/<div/, '<div key={index}');
          break;
        }
      }
      
      return lines.join('\n');
    }
  );
}

// Fix CSS autoprefixer warnings
function fixCSSAutoprefixer(content) {
  return content
    .replace(/align-items:\s*start;/g, 'align-items: flex-start;')
    .replace(/justify-content:\s*start;/g, 'justify-content: flex-start;');
}

// Fix React component naming
function fixComponentNaming(content) {
  return content
    .replace(/function\s+([a-z][a-zA-Z]*)\s*\(/g, (match, name) => {
      return `function ${name.charAt(0).toUpperCase() + name.slice(1)}(`;
    })
    .replace(/export default\s+([a-z][a-zA-Z]*);/g, (match, name) => {
      return `export default ${name.charAt(0).toUpperCase() + name.slice(1)};`;
    });
}

// Main execution
console.log('🔧 Starting comprehensive deployment fix...');

// Fix JS files
const jsFiles = findFiles('./src', ['.js', '.jsx']);
console.log(`📁 Found ${jsFiles.length} JS files to process`);

jsFiles.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    // Apply all fixes
    content = fixUnescapedEntities(content);
    content = fixMissingAlt(content);
    content = fixComponentNaming(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`✅ Fixed: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
  }
});

// Fix CSS files
const cssFiles = findFiles('./src', ['.css']);
console.log(`📁 Found ${cssFiles.length} CSS files to process`);

cssFiles.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    content = fixCSSAutoprefixer(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`✅ Fixed CSS: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error processing CSS ${file}:`, error.message);
  }
});

console.log('🎉 Deployment fix completed!');
console.log('📝 Next steps:');
console.log('1. Run: npm run build');
console.log('2. Check for any remaining errors');
console.log('3. Commit and push to trigger Vercel deployment'); 