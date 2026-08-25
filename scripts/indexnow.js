const fs = require('fs');
const path = require('path');
const https = require('https');

const SITEMAP_PATH = path.join(__dirname, '..', 'out', 'sitemap.xml');
const HOSTNAME = 'materialverse.vercel.app';
const KEY = 'cda8fa4d7d6622ef7f52f8dbd5e41bf9';
const KEY_LOCATION = `https://${HOSTNAME}/${KEY}.txt`;

function submitIndexNow() {
  console.log('--------------------------------------------------');
  console.log('RUNNING INDEXNOW SUBMISSION...');
  console.log('--------------------------------------------------');

  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`Sitemap not found at ${SITEMAP_PATH}. Build the project first.`);
    return;
  }

  const xmlContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const locRegex = /<loc>([^<]*)<\/loc>/gi;
  const urls = [];
  let match;

  while ((match = locRegex.exec(xmlContent)) !== null) {
    urls.push(match[1].trim());
  }

  if (urls.length === 0) {
    console.log('No URLs found in sitemap.xml. Skipping submission.');
    return;
  }

  console.log(`Prepared ${urls.length} URLs for IndexNow submission.`);

  const payload = JSON.stringify({
    host: HOSTNAME,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  const req = https.request(options, (res) => {
    let responseBody = '';
    res.on('data', (chunk) => {
      responseBody += chunk;
    });

    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log(`IndexNow Submission Successful! HTTP Status: ${res.statusCode}`);
      } else {
        console.error(`IndexNow Submission Failed. Status Code: ${res.statusCode}. Response: ${responseBody}`);
      }
    });
  });

  req.on('error', (e) => {
    console.error(`IndexNow Request Error: ${e.message}`);
  });

  req.write(payload);
  req.end();
}

submitIndexNow();
