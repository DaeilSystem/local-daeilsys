/**
 * DVIA-MLP1000 이미지 다운로드 스크립트
 *
 * 사용법:
 * node scripts/download-mlp1000-images.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.daeilsys.com/ko-KR/products/active-vibration-isolation-systems/dvia-mlp1000-active-vibration-isolation-system/assets/images';

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Redirect 처리
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else {
        file.close();
        fs.unlink(filepath, () => {});
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const downloadSequence = async (basePath, filename, startFrame, endFrame, frameDigits, extension, outputDir) => {
  // 디렉토리 생성
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const promises = [];
  for (let i = startFrame; i <= endFrame; i++) {
    const frameNum = String(i).padStart(frameDigits, '0');
    const url = `${basePath}/${filename}-${frameNum}.${extension}`;
    const filepath = path.join(outputDir, `${filename}-${frameNum}.${extension}`);

    // 파일이 이미 있으면 스킵
    if (fs.existsSync(filepath)) {
      console.log(`Skipping ${filepath} (already exists)`);
      continue;
    }

    promises.push(
      downloadImage(url, filepath)
        .then(() => console.log(`Downloaded: ${filepath}`))
        .catch((err) => console.error(`Failed to download ${url}:`, err.message))
    );
  }

  await Promise.all(promises);
};

const main = async () => {
  const publicDir = path.join(__dirname, '..', 'public');

  // Hero motion sequence
  console.log('Downloading hero motion sequence...');
  await downloadSequence(
    `${BASE_URL}/motion-sample`,
    'dvia-mlp1000-motion',
    1,
    120,
    4,
    'jpg',
    path.join(publicDir, 'dvia-mlp1000', 'motion-sample')
  );

  // Disassembly motion sequence
  console.log('Downloading disassembly motion sequence...');
  await downloadSequence(
    `${BASE_URL}/motion-disassembly`,
    'dvia-mlp1000-disassembly',
    0,
    120,
    4,
    'jpg',
    path.join(publicDir, 'dvia-mlp1000', 'motion-disassembly')
  );

  console.log('Done!');
};

main().catch(console.error);
