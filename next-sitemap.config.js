/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mystrymind.com', // ✅ Replace with your actual domain
  generateRobotsTxt: true,           // ✅ Creates robots.txt
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  trailingSlash: false,
};
