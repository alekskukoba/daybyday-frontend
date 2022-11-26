module.exports = {
  i18n: {
    locales: ['default', 'en', 'uk'],
    defaultLocale: 'default',
    localeDetection: false,
    keySeparator: '.',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    localePath: './public/locales',
    localeStructure: '{{lng}}',
  },
}
