module.exports = {
  base: '/Vue-analysis/',
  dest: 'dist',
  title: 'Vue - 系统学习',
  description: 'Analysis vue.js deeply',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: false,
  themeConfig: {
    repo: 'littlombie/Vue-analysis',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: '我的博客',
        link: 'https://littlombie.github.io/'
      },
      {
        text: '我的网站',
        link: 'https://littlombie.github.io/website'
      }
    ],
    sidebar: [
      {
        title: 'new Vue',
        collapsable: false,
        children: [
          ['newVue/', 'newVue']
        ]
      },
      {
        title: '生命周期',
        collapsable: false,
        children: [
          ['lifeCycle/', 'lifeCycle']
        ]
      },
      {
        title: 'render函数',
        collapsable: false,
        children: [
          ['render/', 'render']
        ]
      },
      {
        title: 'vuex',
        collapsable: false,
        children: [
          ['vuex/', 'vuex']
        ]
      }
    ]
  }
}
