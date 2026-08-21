const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'out');

// Helper to recursively find all HTML files in a folder
function getHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function runAudit() {
  console.log('--------------------------------------------------');
  console.log('RUNNING BROKEN LINKS DETECTION CRAWLER...');
  console.log('--------------------------------------------------');

  if (!fs.existsSync(BUILD_DIR)) {
    console.error(`Error: Build directory "${BUILD_DIR}" does not exist. Run "npm run build" first.`);
    process.exit(1);
  }

  const htmlFiles = getHtmlFiles(BUILD_DIR);
  let brokenCount = 0;

  htmlFiles.forEach((file) => {
    const relativeSrcPath = path.relative(BUILD_DIR, file);
    if (relativeSrcPath.startsWith('_next')) return;

    const htmlContent = fs.readFileSync(file, 'utf8');
    
    // Regex to capture href attribute value from anchor elements
    const hrefRegex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/gi;
    let match;

    while ((match = hrefRegex.exec(htmlContent)) !== null) {
      const href = match[1].trim();

      // Skip external, fragment-only, mailto, or tel links
      if (
        href.startsWith('http') && !href.startsWith('https://materialverse.vercel.app') && !href.startsWith('http://localhost')
      ) continue;
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href === '') continue;

      // Clean the URL path
      let cleanPath = href.replace('https://materialverse.vercel.app', '').replace('http://localhost:3000', '');
      // Strip hashes
      if (cleanPath.includes('#')) {
        cleanPath = cleanPath.substring(0, cleanPath.indexOf('#'));
      }
      // Strip queries
      if (cleanPath.includes('?')) {
        cleanPath = cleanPath.substring(0, cleanPath.indexOf('?'));
      }

      // Check if it's the root
      let targetFile;
      if (cleanPath === '/' || cleanPath === '') {
        targetFile = path.join(BUILD_DIR, 'index.html');
      } else {
        // Resolve absolute target filepath
        if (cleanPath.startsWith('/')) {
          cleanPath = cleanPath.substring(1);
        }
        targetFile = path.join(BUILD_DIR, `${cleanPath}.html`);
        if (!fs.existsSync(targetFile)) {
          targetFile = path.join(BUILD_DIR, cleanPath, 'index.html');
        }
      }

      if (!fs.existsSync(targetFile)) {
        brokenCount++;
        console.error(`[Broken Link]: File: "${relativeSrcPath}" -> links to invalid target: "${href}" (Resolved path not found: "${targetFile}")`);
      }
    }
  });

  console.log('--------------------------------------------------');
  console.log(`Scan Complete. Found ${brokenCount} broken internal links.`);
  console.log('--------------------------------------------------');

  if (brokenCount > 0) {
    process.exit(1);
  } else {
    console.log('No broken internal links found. Link check passed!');
  }
}

runAudit();
