module.exports = {
  title: '前端修行手册',
  description: '修行贵在持之以恒。',
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  dest: 'dist',
  themeConfig: {
  	nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
  		{ text: 'Blog', link: 'http://blog.p2yang.com'}
  	],
  	sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '',
            'css',
            // '/cache',
            'ui',
            'tools',
            'engineering',
            'protocol',
            'node',
            'chrome',
            'others',
          ]
        }
      ]
    },
    lastUpdated: '上次更新',
    repo: 'p2yang/handbook',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页'
  }
}
