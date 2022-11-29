module.exports = {
  i18n: {
    locales: ['default', 'uk', 'en'],
    defaultLocale: 'default',
    localeDetection: false,
    keySeparator: '.',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    localePath: './public/locales',
  },
}
