/** @type {import('next-sitemap').IConfig} */
module.exports = {

  siteUrl: 'https://mystrymind.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/hero',
    '/whyChooseUs',
    '/techStack',
    '/developmentProcess',
    '/apply/success'
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://mystrymind.com/sitemap.xml'
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    // Disable automatic Host entry
    host: undefined
  }

};
