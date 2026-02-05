import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  lang: 'zh-CN',
  
  title: '每日资讯日报',
  description: 'AI 每日自动采集的资讯日报',
  
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  
  theme: plumeTheme({
    logo: '/logo.svg',
    
    navbar: [
      { text: '首页', link: '/' },
      { text: '日报', link: '/daily/' }
    ],
    
    sidebar: {
      '/daily/': [
        {
          text: '每日日报',
          collapsible: false,
          children: 'auto'
        }
      ]
    },
    
    plugins: {
      git: false
    }
  }),
  
  bundler: viteBundler()
})
