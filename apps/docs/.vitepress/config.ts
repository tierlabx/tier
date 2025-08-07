import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tier",
  description: "Tier",
  themeConfig: {
      logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '介绍', link: '/' },
      { text: '教程', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '教程',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tierlabx/tier' }
    ]
  }
})
