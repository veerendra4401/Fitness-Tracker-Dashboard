const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateImages() {
  const inputSvg = fs.readFileSync(path.join(__dirname, 'public', 'logo.svg'));
  
  // Generate favicon.ico
  await sharp(inputSvg)
    .resize(64, 64)
    .toFormat('png')
    .toFile(path.join(__dirname, 'public', 'favicon.png'));
  
  // Generate logo192.png
  await sharp(inputSvg)
    .resize(192, 192)
    .toFormat('png')
    .toFile(path.join(__dirname, 'public', 'logo192.png'));
  
  // Generate logo512.png
  await sharp(inputSvg)
    .resize(512, 512)
    .toFormat('png')
    .toFile(path.join(__dirname, 'public', 'logo512.png'));
  
  // Generate og-image.png
  await sharp(inputSvg)
    .resize(1200, 630)
    .toFormat('png')
    .toFile(path.join(__dirname, 'public', 'og-image.png'));
}

generateImages().catch(console.error); 