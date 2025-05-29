import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

// Dönüştürülecek görsel dosyaları
const imagesToConvert = [
  'al.png',
  'app-store-badge.png',
  'es.png',
  'example.jpg',
  'game-screen-fish.png',
  'google-play-badge.png',
  'logo.png',
  'tr.png'
];

async function convertToWebP() {
  console.log('Görseller WebP formatına dönüştürülüyor...');
  
  for (const image of imagesToConvert) {
    const inputPath = path.join(publicDir, image);
    const outputPath = path.join(publicDir, `${path.parse(image).name}.webp`);
    
    try {
      await sharp(inputPath)
        .webp({ quality: 80 }) // %80 kalite ile sıkıştırma
        .toFile(outputPath);
      
      console.log(`✅ ${image} başarıyla dönüştürüldü: ${path.parse(image).name}.webp`);
    } catch (error) {
      console.error(`❌ ${image} dönüştürülürken hata oluştu:`, error);
    }
  }
  
  console.log('Dönüştürme işlemi tamamlandı!');
}

convertToWebP();
