# Лабораторні роботи з вебпрограмування

Репозиторій з лабораторними роботами з дисципліни «Вебпрограмування».

- **Студент:** Артем Цяк
- **Спеціальність:** 125 «Кібербезпека та захист інформації»
- **Заклад:** НУ «Львівська політехніка»

Наскрізний проєкт курсу — **резюме-сторінка**. У кожній наступній лабораторній її доповнюють новими технологіями.

## Зміст

| № | Тема | Папка | Що зроблено |
|---|------|-------|-------------|
| 2 | HTML та React | [`lab_2`](web-programming-labs/lab_2) | Семантична HTML-розмітка резюме ([`index.html`](web-programming-labs/lab_2/index.html)) і та сама сторінка, розбита на React-компоненти ([`lab_2_react`](web-programming-labs/lab_2/lab_2_react)) |
| 3 | CSS та Tailwind CSS | [`lab_3`](web-programming-labs/lab_3) | Стилізація HTML-резюме власним CSS ([`styles.css`](web-programming-labs/lab_3/styles.css)) і стилізація React-резюме утилітарними класами Tailwind CSS v4 ([`lab_3_react`](web-programming-labs/lab_3/lab_3_react)) |

## Структура

```
web-programming-labs/
├── lab_2/
│   ├── index.html          # резюме на чистому HTML
│   └── lab_2_react/        # резюме на React (Vite)
└── lab_3/
    ├── index.html          # резюме з підключеним CSS
    ├── styles.css          # зовнішня таблиця стилів
    └── lab_3_react/        # резюме на React + Tailwind CSS
```

## Запуск

**HTML-версії.** Відкрийте файл `index.html` потрібної лабораторної в браузері. Збірка не потрібна.

**React-версії.** Потрібен [Node.js](https://nodejs.org/) 20.19+ або 22.12+.

```bash
cd web-programming-labs/lab_3/lab_3_react   # або lab_2/lab_2_react
npm install      # встановити залежності (один раз)
npm run dev      # запустити сервер розробки → http://localhost:5173
```

Інші команди:
- `npm run build` збирає проєкт у папку `dist/`;
- `npm run preview` переглядає зібрану версію;
- `npm run lint` перевіряє код лінтером oxlint.

## Технології

HTML5 · CSS3 (Flexbox, Grid, медіазапити) · JavaScript · React 19 · Vite · Tailwind CSS 4
