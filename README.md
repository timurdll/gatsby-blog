# Gatsby Markdown Blog

Простой статический блог на Gatsby с поддержкой Markdown, TypeScript, CSS Modules, синтаксиса PrismJS и динамической сортировкой постов.

## Структура проекта

```
gatsby-blog/
├── gatsby-browser.ts
├── gatsby-config.ts
├── gatsby-node.ts
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── components
│   │   └── PostList.tsx
│   ├── content
│   │   └── posts
│   │       ├── post-1.md
│   │       ├── post-2.md
│   │       └── post-3.md
│   ├── gatsby-types.d.ts
│   ├── grapghql
│   │   └── fragments.ts
│   ├── hooks
│   │   └── useSortedPosts.ts
│   ├── pages
│   │   ├── 404.tsx
│   │   └── index.tsx
│   ├── styles
│   │   ├── index.module.css
│   │   └── post.module.css
│   ├── templates
│   │   └── post.tsx
│   └── types
│       └── index.ts
└── tsconfig.json
```

## Требования

- Node.js >= 16
- npm или yarn

## Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/timurdll/gatsby-blog.git
   cd gatsby-blog
   ```

2. Установите зависимости:

   ```bash
   npm install
   # или
   yarn install
   ```

## Запуск проекта

- `npm run develop` / `yarn develop` — запустить dev-сервер с hot-reload ([http://localhost:8000](http://localhost:8000))
