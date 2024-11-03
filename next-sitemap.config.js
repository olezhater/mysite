// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://teretenko.com', // Ваш URL
    generateRobotsTxt: true,
    exclude: [
      '/blog',           // Исключает основную страницу блога
      '/blog/*',         // Исключает все посты блога
      '/edit'            // Исключает страницу редактирования
    ],
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: ['/blog', '/edit'] } // Исключает страницы и из robots.txt
      ]
    }
  };