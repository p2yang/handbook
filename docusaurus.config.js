// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '前端修行手册',
  tagline: '记录沿途风景',
  url: 'https://p2yang.github.io',
  baseUrl: '/handbook/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'p2yang', // Usually your GitHub org/user name.
  projectName: 'handbook', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/p2yang/handbook/edit/master/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      navbar: {
        title: 'Web 修行手册',
        logo: {
          alt: 'Up for Web 修行手册',
          src: 'img/logo.png',
        },
        hideOnScroll: true,
        items: [
          // {
          //   type: 'doc',
          //   docId: 'guide',
          //   position: 'left',
          //   label: '指南',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://p2yang.github.io/blog/',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://github.com/p2yang/handbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: 'MIT Licensed | Copyright © 2018-present pyang'
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
