const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'out');
const SITEMAP_PATH = path.join(BUILD_DIR, 'sitemap.xml');

function validateSitemap() {
  console.log('--------------------------------------------------');
  console.log('RUNNING SITEMAP VALIDATION...');
  console.log('--------------------------------------------------');

  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`Error: sitemap.xml not found at ${SITEMAP_PATH}. Build the project first.`);
    process.exit(1);
  }

  const xmlContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const locRegex = /<loc>([^<]*)<\/loc>/gi;
  const urls = [];
  let match;

  while ((match = locRegex.exec(xmlContent)) !== null) {
    urls.push(match[1].trim());
  }

  console.log(`Found ${urls.length} URLs in sitemap.xml.`);
  let failed = false;

  urls.forEach((url) => {
    // 1. Validate URL syntax & hostname
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.hostname !== 'materialverse.vercel.app') {
        console.error(`[Error]: Invalid hostname "${parsedUrl.hostname}" for URL: ${url}`);
        failed = true;
      }
      if (parsedUrl.protocol !== 'https:') {
        console.error(`[Error]: Non-HTTPS protocol found for URL: ${url}`);
        failed = true;
      }
      // 2. Checks for fragments
      if (parsedUrl.hash) {
        console.error(`[Error]: Fragment/Hash found in sitemap URL: ${url}`);
        failed = true;
      }
      // 3. Checks for query strings
      if (parsedUrl.search) {
        console.error(`[Error]: Query parameters found in sitemap URL: ${url}`);
        failed = true;
      }
    } catch (e) {
      console.error(`[Error]: Malformed URL format: ${url}. Error: ${e.message}`);
      failed = true;
      return;
    }

    // 4. Local File Mapping (simulate HTTP 200 OK)
    // Resolve absolute path in out/
    let relativeUrlPath = url.replace('https://materialverse.vercel.app', '');
    if (relativeUrlPath.startsWith('/')) {
      relativeUrlPath = relativeUrlPath.substring(1);
    }

    let filePath;
    if (relativeUrlPath === '') {
      filePath = path.join(BUILD_DIR, 'index.html');
    } else {
      filePath = path.join(BUILD_DIR, `${relativeUrlPath}.html`);
      if (!fs.existsSync(filePath)) {
        filePath = path.join(BUILD_DIR, relativeUrlPath, 'index.html');
      }
    }

    if (!fs.existsSync(filePath)) {
      console.error(`[Error 404]: File not found for sitemap URL: ${url} (resolved locally to: ${filePath})`);
      failed = true;
      return;
    }

    // 5. Read file contents to parse head attributes
    const htmlContent = fs.readFileSync(filePath, 'utf8');

    // Confirm canonical tag equals sitemap URL
    const canonicalMatch = htmlContent.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i) ||
                           htmlContent.match(/<link\s+href="([^"]*)"\s+rel="canonical"/i);
    let canonical = canonicalMatch ? canonicalMatch[1].trim() : '';
    if (canonical.endsWith('/')) {
      canonical = canonical.slice(0, -1);
    }
    let normalizedUrl = url;
    if (normalizedUrl.endsWith('/')) {
      normalizedUrl = normalizedUrl.slice(0, -1);
    }

    if (!canonical) {
      console.error(`[Error]: Missing canonical tag on page: ${url}`);
      failed = true;
    } else if (canonical !== normalizedUrl) {
      console.error(`[Error]: Canonical URL mismatch. Page: ${url} -> Canonical: ${canonical}`);
      failed = true;
    }

    // Confirm page is indexable (not noindex)
    const robotsMatch = htmlContent.match(/<meta\s+name="robots"\s+content="([^"]*)"/i) ||
                        htmlContent.match(/<meta\s+content="([^"]*)"\s+name="robots"/i);
    const robots = robotsMatch ? robotsMatch[1].trim() : '';
    if (robots.toLowerCase().includes('noindex')) {
      console.error(`[Error]: Page is marked as noindex but included in sitemap: ${url}`);
      failed = true;
    }
  });

  if (failed) {
    console.error('Sitemap Validation failed.');
    process.exit(1);
  } else {
    console.log('Sitemap Validation passed successfully.');
  }
}

validateSitemap();
