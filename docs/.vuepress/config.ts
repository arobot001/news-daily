import { defaultTheme } from '@vuepress-plume/theme'
import { defaultPlugins } from '@vuepress-plume/plugin'

export default {
  title: '每日资讯日报',
  description: 'AI 每日自动采集的资讯日报',
  
  lang: 'zh-CN',
  
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  
  theme: defaultTheme({
    logo: '/logo.svg',
    
    navbar: [
      { text: '首页', link: '/' },
      { text: '日报', link: '/daily/' },
      { text: 'GitHub', link: 'https://github.com/arobot001/news-daily' }
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
    
    plugins: defaultPlugins({
      git: false
    })
  })
}
