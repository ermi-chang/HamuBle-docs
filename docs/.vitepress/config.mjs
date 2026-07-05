import { defineConfig } from 'vitepress'

const GITHUB_USER = 'ermi-chang'

export default defineConfig({
  lang: 'zh-CN',
  title: 'HamuBle',
  description: 'HamuBle — 碧蓝幻想（GBF）救援多人房间 过滤 / 显示 Chrome 扩展 · 使用手册',
  base: '/HamuBle-docs/',
  lastUpdated: true,
  head: [
    ['meta', { name: 'robots', content: 'index,follow' }]
  ],
  themeConfig: {
    nav: [
      { text: '使用前', link: '/license' },
      { text: '关于', link: '/about' },
      { text: '使用方法', link: '/usage' },
      { text: '安装', link: '/install' },
      { text: '常见问题', link: '/faq' }
    ],
    sidebar: [
      {
        text: '使用前',
        items: [
          { text: '使用前的小提醒', link: '/license' }
        ]
      },
      {
        text: '开始使用',
        items: [
          { text: '关于 HamuBle', link: '/about' },
          { text: '常见问题 / 免责声明', link: '/faq' },
          { text: '安装方法', link: '/install' },
          { text: '更新日志', link: '/changelog' }
        ]
      },
      {
        text: '功能',
        items: [
          { text: '使用方法', link: '/usage' },
          { text: '主页注册', link: '/usage#主页注册' },
          { text: '救援筛选', link: '/usage#救援筛选' },
          { text: '我的任务', link: '/usage#我的任务' },
          { text: '掉落监视', link: '/usage#掉落监视' },
          { text: '信息',     link: '/usage#信息' },
          { text: '设置',     link: '/usage#设置' },
          { text: '收藏',     link: '/usage#收藏' }
        ]
      }
    ],
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: `https://github.com/${GITHUB_USER}/Chrome-HamuBle` }
    ],
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdatedText: '最后更新',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    footer: {
      message: '非官方粉丝自制工具 · 与 Cygames 无关',
      copyright: 'Copyright © 2026 HamuBle author'
    }
  }
})
