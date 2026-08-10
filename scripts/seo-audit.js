const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'out');
const SITEMAP_PATH = path.join(BUILD_DIR, 'sitemap.xml');

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

function parseHtml(htmlContent) {
  const titleMatch = htmlContent.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  const descMatch = htmlContent.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || 
                    htmlContent.match(/<meta\s+content="([^"]*)"\s+name="description"/i);
  const description = descMatch ? descMatch[1].trim() : '';

  const canonicalMatch = htmlContent.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i) ||
                         htmlContent.match(/<link\s+href="([^"]*)"\s+rel="canonical"/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';

  const robotsMatch = htmlContent.match(/<meta\s+name="robots"\s+content="([^"]*)"/i) ||
                      htmlContent.match(/<meta\s+content="([^"]*)"\s+name="robots"/i);
  const robots = robotsMatch ? robotsMatch[1].trim() : '';

  // Extract all H1s
  const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
  const h1s = [];
  let match;
  while ((match = h1Regex.exec(htmlContent)) !== null) {
    h1s.push(match[1].replace(/<[^>]*>/g, '').trim());
  }

  // Word count (strip script, style, and HTML tags)
  const bodyText = htmlContent
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const wordCount = bodyText ? bodyText.split(' ').length : 0;

  return { title, description, canonical, robots, h1s, wordCount };
}

function runAudit() {
  console.log('--------------------------------------------------');
  console.log('RUNNING ENTERPRISE SEO AUDIT...');
  console.log('--------------------------------------------------');

  if (!fs.existsSync(BUILD_DIR)) {
    console.error(`Error: Build directory "${BUILD_DIR}" does not exist. Please run "npm run build" first.`);
    process.exit(1);
  }

  let sitemapUrls = new Set();
  if (fs.existsSync(SITEMAP_PATH)) {
    const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
    const locRegex = /<loc>([^<]*)<\/loc>/gi;
    let match;
    while ((match = locRegex.exec(sitemapContent)) !== null) {
      let urlVal = match[1].trim();
      if (urlVal.endsWith('/')) {
        urlVal = urlVal.slice(0, -1);
      }
      sitemapUrls.add(urlVal);
    }
  } else {
    console.warn('Warning: sitemap.xml not found in build output.');
  }

  const htmlFiles = getHtmlFiles(BUILD_DIR);
  let totalIntendedUrls = 0;
  let status200 = 0;
  let missingTitleCount = 0;
  let missingDescCount = 0;
  let missingCanonicalCount = 0;
  let nonSelfCanonicalCount = 0;
  let multipleH1Warnings = 0;
  let noindexCount = 0;
  let invalidSitemapUrls = 0;
  let hashUrlsInSitemap = 0;
  let queryUrlsInSitemap = 0;
  let malformedUrlsInSitemap = 0;

  const titles = new Map();
  const descriptions = new Map();

  htmlFiles.forEach((file) => {
    const relativePath = path.relative(BUILD_DIR, file);
    if (relativePath.startsWith('_next') || relativePath === '404.html' || relativePath === '_not-found.html') return;

    totalIntendedUrls++;
    status200++; // Statically exported file exists -> 200

    const htmlContent = fs.readFileSync(file, 'utf8');
    const parsed = parseHtml(htmlContent);

    // Map file to absolute target url format
    let targetUrlPath = relativePath.replace(/\\/g, '/').replace(/\.html$/, '');
    if (targetUrlPath === 'index') {
      targetUrlPath = '';
    } else if (targetUrlPath.endsWith('/index')) {
      targetUrlPath = targetUrlPath.slice(0, -6);
    }
    let pageUrl = `https://materialverse.vercel.app/${targetUrlPath}`;
    if (pageUrl.endsWith('/')) {
      pageUrl = pageUrl.slice(0, -1);
    }

    // Verify Title
    if (!parsed.title) {
      missingTitleCount++;
      console.warn(`[Missing Title]: ${pageUrl}`);
    } else {
      if (titles.has(parsed.title)) {
        titles.get(parsed.title).push(pageUrl);
      } else {
        titles.set(parsed.title, [pageUrl]);
      }
    }

    // Verify Description
    if (!parsed.description) {
      missingDescCount++;
      console.warn(`[Missing Description]: ${pageUrl}`);
    } else {
      if (descriptions.has(parsed.description)) {
        descriptions.get(parsed.description).push(pageUrl);
      } else {
        descriptions.set(parsed.description, [pageUrl]);
      }
    }

    // Verify Canonical
    if (!parsed.canonical) {
      missingCanonicalCount++;
      console.warn(`[Missing Canonical]: ${pageUrl}`);
    } else if (parsed.canonical !== pageUrl) {
      nonSelfCanonicalCount++;
      console.warn(`[Non-Self Canonical]: Page: ${pageUrl} -> Canonical: ${parsed.canonical}`);
    }

    // Verify H1s
    if (parsed.h1s.length > 1) {
      multipleH1Warnings++;
      console.warn(`[Multiple H1s]: ${pageUrl} has ${parsed.h1s.length} H1 tags.`);
    } else if (parsed.h1s.length === 0) {
      console.warn(`[Missing H1]: ${pageUrl}`);
    }

    // Indexability Directive
    const isNoIndex = parsed.robots.toLowerCase().includes('noindex');
    if (isNoIndex) {
      noindexCount++;
    }

    // Sitemap Validation checks
    const isInSitemap = sitemapUrls.has(pageUrl);
    if (isInSitemap && isNoIndex) {
      invalidSitemapUrls++;
      console.error(`[Error]: Sitemap contains noindex URL: ${pageUrl}`);
    }
    if (!isInSitemap && !isNoIndex) {
      console.warn(`[Orphan/Missing from Sitemap]: Indexable page ${pageUrl} is not listed in sitemap.xml.`);
    }
  });

  // Sitemap audit check parameters
  sitemapUrls.forEach((url) => {
    if (url.includes('#')) {
      hashUrlsInSitemap++;
      console.error(`[Error]: Hash URL found in sitemap: ${url}`);
    }
    if (url.includes('?')) {
      queryUrlsInSitemap++;
      console.error(`[Error]: Query URL found in sitemap: ${url}`);
    }
    if (/https?:\/\/.*https?:\/\//.test(url) || url.includes('vizag-steelhttps')) {
      malformedUrlsInSitemap++;
      console.error(`[Error]: Malformed concatenated URL found in sitemap: ${url}`);
    }
  });

  // Calculate duplicates
  let duplicateTitles = 0;
  titles.forEach((urls, title) => {
    if (urls.length > 1) {
      duplicateTitles += (urls.length - 1);
      console.warn(`[Duplicate Title]: "${title}" shared by:\n - ${urls.join('\n - ')}`);
    }
  });

  let duplicateDescriptions = 0;
  descriptions.forEach((urls, desc) => {
    if (urls.length > 1) {
      duplicateDescriptions += (urls.length - 1);
      console.warn(`[Duplicate Description]: "${desc.substring(0, 50)}..." shared by:\n - ${urls.join('\n - ')}`);
    }
  });

  console.log('\n--------------------------------------------------');
  console.log('AUDIT SUMMARY REPORT');
  console.log('--------------------------------------------------');
  console.log(`Total intended URLs analyzed: ${totalIntendedUrls}`);
  console.log(`HTTP 200: ${status200}`);
  console.log(`Missing titles: ${missingTitleCount}`);
  console.log(`Duplicate titles: ${duplicateTitles}`);
  console.log(`Missing descriptions: ${missingDescCount}`);
  console.log(`Duplicate descriptions: ${duplicateDescriptions}`);
  console.log(`Multiple H1 warnings: ${multipleH1Warnings}`);
  console.log(`Missing canonicals: ${missingCanonicalCount}`);
  console.log(`Non-self canonicals: ${nonSelfCanonicalCount}`);
  console.log(`Noindex pages detected: ${noindexCount}`);
  console.log(`Sitemap URLs total count: ${sitemapUrls.size}`);
  console.log(`Noindex URLs in sitemap: ${invalidSitemapUrls}`);
  console.log(`Hash URLs in sitemap: ${hashUrlsInSitemap}`);
  console.log(`Query URLs in sitemap: ${queryUrlsInSitemap}`);
  console.log(`Malformed URLs in sitemap: ${malformedUrlsInSitemap}`);
  console.log('--------------------------------------------------');

  if (invalidSitemapUrls > 0 || hashUrlsInSitemap > 0 || queryUrlsInSitemap > 0 || malformedUrlsInSitemap > 0) {
    console.error('Audit failed with critical sitemap validation errors.');
    process.exit(1);
  } else {
    console.log('SEO Audit Passed successfully.');
  }
}

runAudit();
