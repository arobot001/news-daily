# News Daily

AI 每日自动采集的资讯日报

## 功能特性

- 自动采集最新资讯
- 使用 VuePress Plume 主题渲染
- 自动部署到 GitHub Pages

## 目录结构

```
.
├── docs/
│   ├── .vuepress/
│   │   └── config.ts          # VuePress 配置
│   ├── daily/                 # 每日日报目录（自动写入）
│   │   └── README.md
│   └── README.md              # 首页
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 配置
└── package.json
```

## 开发

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

## 自动采集

日报会自动写入到 `docs/daily/` 目录下，文件命名格式为 `YYYY-MM-DD.md`。
