const base = '/handbook/'
const logo = base + 'logo.png'

module.exports = {
  title: '前端修行手册',
  description: '千里之行，始于足下',
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: logo }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: logo }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: logo }],
    ['link', { rel: 'manifest', href: base + 'site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: logo, color: '#5bbad5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  base,
  dest: 'dist',
  themeConfig: {
    logo: '/logo.png',
    home: '/guide/',
  	navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Source', link: '/source/' },
  		{ text: 'Blog', link: 'https://p2yang.github.io/blog/'}
  	],
  	sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '',
            'ui'
          ]
        }
      ],
      '/source/': [
        {
          title: '资源',
          collapsable: false,
          children: [
            '',
            'imooc'
          ]
        }
      ]
    },
    lastUpdatedText: '上次更新',
    repo: 'p2yang/learning-handbook',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页'
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ]
}
