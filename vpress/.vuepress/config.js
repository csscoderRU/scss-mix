const autometa_options = {
  site: {
    name   : 'SCSS MIX',
    twitter: 'csscoder',
  },
  canonical_base: 'https://mix.csscoder.pro',
  image_sources: [
    'frontmatter',
    /!\[.*?\]\((.*?)\)/i,        // markdown image regex
    /<img.*?src=['"](.*?)['"]/i, // html image regex
  ],
};

module.exports = {
  title: 'SCSS MIX',
  description: 'SCSS parts of code, which work in my practice',
  port: 9090,
  dest: './docs',

  // base: '/',
  themeConfig: {
    nav: [
      { text: 'CSSCODER.pro', link: 'https://csscoder.pro' },
      { text: 'GitHub.com', link: 'https://github.com/csscoderRU/scss-mix' }
    ],
    sidebar: [
      {
        title: 'SCSS Mixins',
        collapsable: true,
        sidebarDepth: 1,
        path: '/mixins/',
        children: [
          ['/mixins/media_queries/', 'Media Queries'],
          ['/mixins/base_container/', 'Base content container'],
          ['/mixins/columns/', 'Columns'],
          ['/mixins/transitions/', 'Transitions'],
          ['/mixins/triangle/', 'Triangle'],
          ['/mixins/font_scale/', 'Font scale'],
        ]
      },
      {
        title: 'SCSS Functions',
        collapsable: true,
        sidebarDepth: 1,
        path: '/functions/',
        children: [
          ['/functions/helpers/', 'Helpers'],
          ['/functions/px2em/', 'Convert PX to EM']
        ]
      },
      {
        title: 'Examples using',
        collapsable: true,
        sidebarDepth: 1,
        path: '/examples/',
        // children: [
        //   ['/examples/userpic/', 'User picture']
        // ]
      },
    ]
  },

  plugins: [
    [ 'autometa', autometa_options ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-153147993-1'
      }
    ]
  ],

  configureWebpack: {
    resolve: {
      alias: {
        '@img': './vpress/media'
      }
    }
  }

};
