module.exports = {
  title: 'SCSS MIX',
  description: 'SCSS parts of code, which work in my practice',
  port: 9090,
  dest: './docs',

  // base: '/',
  themeConfig: {
    nav: [
      { text: 'CSSCODER.PRO', link: 'https://csscoder.pro' }
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
  }

};
