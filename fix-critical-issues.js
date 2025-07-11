const fs = require('fs');
const path = require('path');

// Critical files that need immediate fixing
const criticalFiles = [
  'src/app/about-us/page.js',
  'src/app/contact-us/page.js',
  'src/app/how-we-do-it/page.js',
  'src/app/components/Footer.js',
  'src/app/components/CallButton.js',
  'src/app/components/HotspotSection.js',
  'src/app/components/MobileAppTabs.js',
  'src/app/ai-app-development/page.js',
  'src/app/android-app-design/page.js',
  'src/app/android-development/page.js',
  'src/app/ios-development/page.js',
  'src/app/mobile-app-design/page.js',
  'src/app/mobile-app-support/page.js',
  'src/app/mobile-game-development/page.js',
  'src/app/no-code-development/page.js',
  'src/app/pwa-development/page.js',
  'src/app/privacy-policy/page.js',
  'src/app/terms-condition/page.js',
  'src/app/web-app-development/page.js',
  'src/app/mobile-app-testing/page.js',
  'src/app/blog/[id]/page.js',
  'src/app/components/Header.js',
  'src/app/components/MarqueeSlider.js',
  'src/app/globals.css'
];

console.log('🔧 Starting critical deployment fixes...');

// Fix component naming issues
function fixComponentNaming(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix function declarations
    if (content.includes('function page()')) {
      content = content.replace(/function page\(\)/g, 'function Page()');
      modified = true;
    }
    
    if (content.includes('function footer()')) {
      content = content.replace(/function footer\(\)/g, 'function Footer()');
      modified = true;
    }
    
    // Fix export statements
    if (content.includes('export default page;')) {
      content = content.replace(/export default page;/g, 'export default Page;');
      modified = true;
    }
    
    if (content.includes('export default footer;')) {
      content = content.replace(/export default footer;/g, 'export default Footer;');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed component naming: ${filePath}`);
    }
  } catch (error) {
    console.log(`⚠️ Could not process ${filePath}: ${error.message}`);
  }
}

// Fix unescaped entities
function fixUnescapedEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common apostrophe patterns
    const patterns = [
      { from: /Cynergy Studios'/g, to: 'Cynergy Studios&apos;' },
      { from: /app's/g, to: 'app&apos;s' },
      { from: /We're/g, to: 'We&apos;re' },
      { from: /we're/g, to: 'we&apos;re' },
      { from: /brand's/g, to: 'brand&apos;s' },
      { from: /client's/g, to: 'client&apos;s' },
      { from: /Let's/g, to: 'Let&apos;s' },
      { from: /What's/g, to: 'What&apos;s' },
      { from: /we'll/g, to: 'we&apos;ll' },
      { from: /It's/g, to: 'It&apos;s' },
      { from: /today's/g, to: 'today&apos;s' }
    ];
    
    patterns.forEach(pattern => {
      if (content.includes(pattern.from.source.replace(/\\/g, ''))) {
        content = content.replace(pattern.from, pattern.to);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed unescaped entities: ${filePath}`);
    }
  } catch (error) {
    console.log(`⚠️ Could not process ${filePath}: ${error.message}`);
  }
}

// Fix missing alt attributes
function fixMissingAlt(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Find img tags without alt attributes
    const imgRegex = /<img([^>]*?)(?<!alt=)[^>]*>/g;
    const matches = content.match(imgRegex);
    
    if (matches) {
      content = content.replace(imgRegex, (match, p1) => {
        if (!p1.includes('alt=')) {
          return `<img${p1} alt="" />`;
        }
        return match;
      });
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed missing alt attributes: ${filePath}`);
    }
  } catch (error) {
    console.log(`⚠️ Could not process ${filePath}: ${error.message}`);
  }
}

// Fix missing key props
function fixMissingKeys(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common patterns for missing keys
    const keyPatterns = [
      {
        from: /{([^}]+)\.map\(\([^)]+\)\s*=>\s*\(\s*<div([^>]*?)(?<!key=)[^>]*>/g,
        to: (match, p1, p2) => {
          return `{${p1}.map((item, index) => (
            <div key={index}${p2}`;
        }
      }
    ];
    
    keyPatterns.forEach(pattern => {
      if (content.match(pattern.from)) {
        content = content.replace(pattern.from, pattern.to);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed missing keys: ${filePath}`);
    }
  } catch (error) {
    console.log(`⚠️ Could not process ${filePath}: ${error.message}`);
  }
}

// Fix CSS autoprefixer warnings
function fixCSSAutoprefixer(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix align-items and justify-content
    if (content.includes('align-items: start;')) {
      content = content.replace(/align-items:\s*start;/g, 'align-items: flex-start;');
      modified = true;
    }
    
    if (content.includes('justify-content: start;')) {
      content = content.replace(/justify-content:\s*start;/g, 'justify-content: flex-start;');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed CSS autoprefixer: ${filePath}`);
    }
  } catch (error) {
    console.log(`⚠️ Could not process ${filePath}: ${error.message}`);
  }
}

// Process all critical files
criticalFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    console.log(`\n📁 Processing: ${filePath}`);
    
    if (filePath.endsWith('.css')) {
      fixCSSAutoprefixer(filePath);
    } else {
      fixComponentNaming(filePath);
      fixUnescapedEntities(filePath);
      fixMissingAlt(filePath);
      fixMissingKeys(filePath);
    }
  } else {
    console.log(`⚠️ File not found: ${filePath}`);
  }
});

console.log('\n🎉 Critical fixes completed!');
console.log('📝 Next steps:');
console.log('1. Run: npm run build');
console.log('2. Check for any remaining errors');
console.log('3. Commit and push to trigger Vercel deployment'); 