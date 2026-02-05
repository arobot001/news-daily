export default {
  base: '/news-daily/',
  title: '每日资讯日报',
  description: 'AI 每日自动采集的资讯日报',
  
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '日报', link: '/daily/' }
    ],
    
    sidebar: {
      '/daily/': [
        {
          text: '每日日报',
          items: 'auto'
        }
      ]
    }
  }
}
