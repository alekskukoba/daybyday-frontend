const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/alekskukoba/image/upload/',
    domains: ['localhost', 'media.graphassets.com', 'res.cloudinary.com'],
  },
  i18n: {
    defaultLocale: i18n.defaultLocale,
    domains: i18n.domains,
    localeDetection: i18n.localeDetection,
    locales: i18n.locales,
  },
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/ua',
        destination: '/uk',
        permanent: true,
      },
      {
        source: '/docs/statuteV2.pdf',
        destination: '/articles-of-association.pdf',
        permanent: true,
      },
      {
        source: '/en/about-project',
        destination: '/en/about',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/humanitarian-help',
        destination: '/en/gallery/humanitarian-help',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/help-the-army',
        destination: '/en/gallery/assistance-of-the-armed-forces',
        permanent: true,
        locale: false,
      },

      {
        source: '/ua/pro-proekt',
        destination: '/uk/about',
        permanent: true,
      },
      {
        source: '/ua/humanitarna-dopomoha',
        destination: '/uk/gallery/humanitarian-help',
        permanent: true,
      },
      {
        source: '/ua/dopomoha-armiyi',
        destination: '/uk/gallery/assistance-of-the-armed-forces',
        permanent: true,
      },
      {
        source: '/ua/komanda',
        destination: '/uk/team',
        permanent: true,
      },
      {
        source: '/en/kryvyyrih1-region',
        destination: '/en/programs/humanitarian-help',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/mykolayiv1-region',
        destination: '/en/programs/humanitarian-help',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/child1-help',
        destination: '/en/programs/childrens-aid',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/chernihiv1-region',
        destination: '/en/gallery/humanitarian-help/chernihiv-and-the-region',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/kharkiv1-fundraising',
        destination: '/en/gallery/humanitarian-help/kharkiv-and-the-region',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/irpin2-region',
        destination: '/en/gallery/childrens-aid/sweets-for-children-from-irpen',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/irpin1-region',
        destination:
          '/en/gallery/childrens-aid/irpin-opening-of-a-modular-town-for-homeless-families',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/vprog1-help',
        destination: '/en/programs/assistance-of-the-armed-forces',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/vprog2-help',
        destination: '/en/programs/assistance-of-the-armed-forces',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/tov1-help',
        destination:
          '/en/gallery/assistance-of-the-armed-forces/assistance-of-the-armed-forces-2',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/zsugruz4-help',
        destination:
          '/en/gallery/assistance-of-the-armed-forces/assistance-of-the-armed-forces',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/zsugruz5-help',
        destination:
          '/en/gallery/assistance-of-the-armed-forces/took-useful-things-to-the-repair-company-in-the-kharkiv-region',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/zsugrud3-help',
        destination:
          '/en/gallery/assistance-of-the-armed-forces/more-than-100-packets-of-cookies-tea-coffee-chocolate-cigarettes-and-water-were-distributed-to-soldiers-at-checkpoints-in-kharkiv-and-the-region',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/zsugrud2-help',
        destination:
          '/en/gallery/assistance-of-the-armed-forces/brought-15-tons-of-useful-things-to-the-first-company-of-military-unit-a7296',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/zsugrud1-help',
        destination:
          '/en/gallery/assistance-of-the-armed-forces/visited-the-soldiers-who-were-being-treated-brought-new-things-medicines-vitamins-for-a-faster-recovery',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/zsuavto3-help',
        destination:
          '/en/gallery/assistance-of-the-armed-forces/found-painted-and-sent-it-to-the-boys-at-the-front-line',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/zsuavto2-help',
        destination:
          '/en/gallery/assistance-of-the-armed-forces/repaired-painted-sent-the-boys-to-the-front',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/zsuavto1-help',
        destination:
          '/en/gallery/assistance-of-the-armed-forces/found-repaired-painted-and-sent-the-pickup-truck-to-the-guys-on-the-front-line-to-complete-tasks',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/zsugrud-help',
        destination:
          '/en/gallery/assistance-of-the-armed-forces/dressed-our-friend-a-fighter-from-the-landing-forces',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/zsu4051-help',
        destination:
          '/en/gallery/assistance-of-the-armed-forces/handed-over-5000-packs-of-cigarettes-for-the-guys-from-a4051',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/zsu72-help',
        destination:
          '/en/gallery/assistance-of-the-armed-forces/the-72nd-brigade-was-given-a-quad-bike-to-perform-tasks',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/zsu1-special',
        destination:
          '/en/gallery/assistance-of-the-armed-forces/handed-over-to-the-special-forces-of-the-armed-forces-of-ukraine',
        permanent: true,
        locale: false,
      },
      {
        source: '/ua/kryvyyrih1',
        destination: '/uk/programs/humanitarian-help',
        permanent: true,
      },
      {
        source: '/ua/mykolayiv1',
        destination: '/uk/programs/humanitarian-help',
        permanent: true,
      },
      {
        source: '/ua/child1',
        destination: '/uk/programs/childrens-aid',
        permanent: true,
      },
      {
        source: '/ua/chernihiv1',
        destination: '/uk/gallery/humanitarian-help/chernihiv-and-the-region',
        permanent: true,
      },
      {
        source: '/ua/kharkiv1',
        destination: '/uk/gallery/humanitarian-help/kharkiv-and-the-region',
        permanent: true,
      },
      {
        source: '/ua/irpin2',
        destination: '/uk/gallery/childrens-aid/sweets-for-children-from-irpen',
        permanent: true,
      },
      {
        source: '/ua/irpin1',
        destination:
          '/uk/gallery/childrens-aid/irpin-opening-of-a-modular-town-for-homeless-families',
        permanent: true,
      },
      {
        source: '/ua/vprog1',
        destination: '/uk/programs/assistance-of-the-armed-forces',
        permanent: true,
      },
      {
        source: '/ua/vprog2',
        destination: '/uk/programs/assistance-of-the-armed-forces',
        permanent: true,
      },
      {
        source: '/ua/tov1',
        destination:
          '/uk/gallery/assistance-of-the-armed-forces/assistance-of-the-armed-forces-2',
        permanent: true,
      },
      {
        source: '/ua/zsugruz4',
        destination:
          '/uk/gallery/assistance-of-the-armed-forces/assistance-of-the-armed-forces',
        permanent: true,
      },
      {
        source: '/ua/zsugruz5',
        destination:
          '/uk/gallery/assistance-of-the-armed-forces/took-useful-things-to-the-repair-company-in-the-kharkiv-region',
        permanent: true,
      },
      {
        source: '/ua/zsugrud3',
        destination:
          '/uk/gallery/assistance-of-the-armed-forces/more-than-100-packets-of-cookies-tea-coffee-chocolate-cigarettes-and-water-were-distributed-to-soldiers-at-checkpoints-in-kharkiv-and-the-region',
        permanent: true,
      },
      {
        source: '/ua/zsugrud2',
        destination:
          '/uk/gallery/assistance-of-the-armed-forces/brought-15-tons-of-useful-things-to-the-first-company-of-military-unit-a7296',
        permanent: true,
      },
      {
        source: '/ua/zsugrud1',
        destination:
          '/uk/gallery/assistance-of-the-armed-forces/visited-the-soldiers-who-were-being-treated-brought-new-things-medicines-vitamins-for-a-faster-recovery',
        permanent: true,
      },
      {
        source: '/ua/zsuavto3',
        destination:
          '/uk/gallery/assistance-of-the-armed-forces/found-painted-and-sent-it-to-the-boys-at-the-front-line',
        permanent: true,
      },
      {
        source: '/ua/zsuavto2',
        destination:
          '/uk/gallery/assistance-of-the-armed-forces/repaired-painted-sent-the-boys-to-the-front',
        permanent: true,
      },
      {
        source: '/ua/zsuavto1',
        destination:
          '/uk/gallery/assistance-of-the-armed-forces/found-repaired-painted-and-sent-the-pickup-truck-to-the-guys-on-the-front-line-to-complete-tasks',
        permanent: true,
      },
      {
        source: '/ua/zsugrud',
        destination:
          '/uk/gallery/assistance-of-the-armed-forces/dressed-our-friend-a-fighter-from-the-landing-forces',
        permanent: true,
      },
      {
        source: '/ua/zsu4051',
        destination:
          '/uk/gallery/assistance-of-the-armed-forces/handed-over-5000-packs-of-cigarettes-for-the-guys-from-a4051',
        permanent: true,
      },
      {
        source: '/ua/zsu72',
        destination:
          '/uk/gallery/assistance-of-the-armed-forces/the-72nd-brigade-was-given-a-quad-bike-to-perform-tasks',
        permanent: true,
      },
      {
        source: '/ua/zsu1',
        destination:
          '/uk/gallery/assistance-of-the-armed-forces/handed-over-to-the-special-forces-of-the-armed-forces-of-ukraine',
        permanent: true,
      },
    ]
  },
  ...nextConfig,
}
