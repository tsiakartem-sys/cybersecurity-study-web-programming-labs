# Лабораторна робота №3 (частина 2): резюме на React + Tailwind CSS

React-резюме з лабораторної №2, стилізоване утилітарними класами [Tailwind CSS v4](https://tailwindcss.com/docs). Власних CSS-правил немає: увесь вигляд задано класами в атрибуті `className`.

## Як підключено Tailwind

1. Встановлено пакети:
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```
2. У [`vite.config.js`](vite.config.js) додано плагін `tailwindcss()` поруч із `react()`.
3. У [`src/index.css`](src/index.css) залишено один рядок: `@import "tailwindcss";`.

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
lab_3_react/
├── index.html           # HTML-сторінка з <div id="root">
├── vite.config.js       # Vite + плагіни React і Tailwind
├── package.json         # залежності та npm-скрипти
├── public/favicon.svg   # іконка вкладки
└── src/
    ├── index.css        # @import "tailwindcss";
    ├── main.jsx         # точка входу
    ├── App.jsx          # макет: Grid (1 колонка, з md — 2)
    └── components/      # Header, About, Skills, Experience, Education, Languages, Footer
```

## Використані можливості Tailwind

- **Кольори:** палітри `slate` і `teal`.
- **Відступи:** `p-*`, `m-*`, `gap-*`.
- **Типографіка:** `text-*`, `font-*`, `tracking-wide`.
- **Межі й тіні:** `rounded-*`, `border-*`, `ring-*`, `shadow-*`.
- **Макет:** Flexbox і Grid.
- **Градієнт** у шапці: `bg-linear-to-br`.
- **Стани:** `hover:`, `focus-visible:`, `last:`.
- **Адаптивність за принципом mobile-first:** `sm:`, `md:`.
