/** @type {import("pliny/config").PlinyConfig } */

const siteMetadata = {
  title: 'Ngo The Kiet',

  author: 'Ngo The Kiet',

  headerTitle: 'Ngo The Kiet',

  description:
    'Personal portfolio and technical blog about Cybersecurity, Cloud Computing, Linux, Infrastructure, Homelab, and Enterprise Technologies.',

  language: 'en-us',

  locale: 'en-US',

  theme: 'system',

  // Thay bằng domain thật sau khi deploy
  siteUrl: 'https://YOUR_DOMAIN_HERE',

  siteRepo: 'https://github.com/kietsieubeo44',

  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,

  socialBanner: `${process.env.BASE_PATH || ''}/static/images/social-banner.png`,

  email: 'ngothekiet2003@gmail.com',

  github: 'https://github.com/kietsieubeo44',

  linkedin: 'https://www.linkedin.com/in/kiet-ngo-the15102003/',

  // Chưa có thì để trống
  mastodon: '',
  x: '',
  facebook: '',
  youtube: '',
  threads: '',
  instagram: '',
  medium: '',
  bluesky: '',

  stickyNav: true,

  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },

  newsletter: {
    provider: 'buttondown',
  },

  comments: {
    provider: 'giscus',

    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,

      mapping: 'pathname',
      reactions: '1',
      metadata: '0',

      theme: 'light',
      darkTheme: 'transparent_dark',

      themeURL: '',

      lang: 'en',
    },
  },

  search: {
    provider: 'kbar',

    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata

