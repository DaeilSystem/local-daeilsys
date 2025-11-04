/**
 * DVIA-MLP1000 모든 이미지 다운로드 스크립트
 * 시퀀스 이미지뿐만 아니라 모든 관련 이미지를 다운로드
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
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const promises = [];
  for (let i = startFrame; i <= endFrame; i++) {
    const frameNum = String(i).padStart(frameDigits, '0');
    const url = `${basePath}/${filename}-${frameNum}.${extension}`;
    const filepath = path.join(outputDir, `${filename}-${frameNum}.${extension}`);

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

const downloadSingleImage = async (url, filepath) => {
  const dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (fs.existsSync(filepath)) {
    console.log(`Skipping ${filepath} (already exists)`);
    return;
  }

  try {
    await downloadImage(url, filepath);
    console.log(`Downloaded: ${filepath}`);
  } catch (err) {
    console.error(`Failed to download ${url}:`, err.message);
  }
};

const main = async () => {
  const publicDir = path.join(__dirname, '..', 'public');

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

  console.log('Downloading disassembly motion sequence...');
  await downloadSequence(
    `${BASE_URL}/motion-disassembly`,
    'dvia-mlp1000-disassembly',
    0,
    60,
    4,
    'jpg',
    path.join(publicDir, 'dvia-mlp1000', 'motion-disassembly')
  );

  // 단일 이미지들
  console.log('Downloading single images...');
  await downloadSingleImage(
    `${BASE_URL}/all-six-degrees-of-freedom-min.jpg`,
    path.join(publicDir, 'dvia-mlp1000', 'all-six-degrees-of-freedom-min.jpg')
  );

  await downloadSingleImage(
    `${BASE_URL}/performance-min.png`,
    path.join(publicDir, 'dvia-mlp1000', 'performance-min.png')
  );

  console.log('Done!');
};

main().catch(console.error);
