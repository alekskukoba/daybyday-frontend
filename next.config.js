const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'cloudinary',
    path: 'http://res.cloudinary.com/alekskukoba/image/upload/',
    domains: ['localhost', 'media.graphassets.com', 'res.cloudinary.com'],
  },
  i18n: {
    defaultLocale: i18n.defaultLocale,
    domains: i18n.domains,
    localeDetection: i18n.localeDetection,
    locales: i18n.locales,
  },
}

module.exports = nextConfig
