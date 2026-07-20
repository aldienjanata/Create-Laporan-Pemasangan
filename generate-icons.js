/**
 * generate-icons.js
 * Jalankan: node generate-icons.js
 * Requires: npm install sharp
 * 
 * Script ini membuat semua ukuran icon PWA dari Logo/Wifian Solution.png
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const sourceFile = path.join(__dirname, 'Logo', 'Wifian Solution.png');
const outputDir = path.join(__dirname, 'icons');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateIcons() {
  console.log('🎨 Generating PWA icons from:', sourceFile);
  
  for (const size of sizes) {
    const outputFile = path.join(outputDir, `icon-${size}.png`);
    
    await sharp(sourceFile)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(outputFile);
    
    console.log(`✅ icon-${size}.png`);
  }
  
  console.log('\n🎉 Semua icon berhasil dibuat di folder /icons/');
}

generateIcons().catch(console.error);
