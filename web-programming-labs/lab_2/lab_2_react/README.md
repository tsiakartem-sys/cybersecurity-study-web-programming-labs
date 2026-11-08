# Лабораторна робота №2 (частина 2): резюме на React

Резюме з частини 1 ([`../index.html`](../index.html)), відтворене за допомогою React-компонентів. Проєкт створено шаблоном Vite (`npm create vite@latest`, шаблон React).

## Запуск

```bash
npm install      # встановити залежності
npm run dev      # сервер розробки → http://localhost:5173
```

Інші команди:
- `npm run build` збирає проєкт у `dist/`;
- `npm run preview` переглядає збірку;
- `npm run lint` запускає лінтер oxlint.

## Структура

```
lab_2_react/
├── index.html           # HTML-сторінка з <div id="root"> — сюди монтується React
├── vite.config.js       # налаштування Vite (плагін React)
├── package.json         # залежності та npm-скрипти
├── public/favicon.svg   # іконка вкладки
└── src/
    ├── main.jsx         # точка входу: рендерить <App /> у #root
    ├── App.jsx          # кореневий компонент, збирає всі секції
    └── components/
        ├── Header.jsx       # ім'я, підзаголовок, навігація
        ├── About.jsx        # «Про мене»
        ├── Skills.jsx       # навички
        ├── Experience.jsx   # досвід
        ├── Education.jsx    # освіта, курси
        ├── Languages.jsx    # мови
        └── Footer.jsx       # контакти
```
