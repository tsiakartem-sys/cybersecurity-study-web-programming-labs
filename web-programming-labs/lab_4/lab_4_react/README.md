# Лабораторна робота №4 (частина 2): JavaScript у React

Резюме з лабораторної №3 з доданою логікою на хуках `useState` та `useEffect`.

## Що реалізовано

| Завдання | Де | Як працює |
|----------|----|-----------|
| Системна інформація | [`Footer.jsx`](src/components/Footer.jsx) | `useEffect` при монтуванні зберігає дані про браузер/ОС у `localStorage`, читає їх назад у стан і виводить списком |
| Відгуки | [`Reviews.jsx`](src/components/Reviews.jsx) | `useEffect` + `fetch` до `jsonplaceholder.typicode.com/posts/8/comments` (варіант 8); результат у `useState`, показ через `.map()` |
| Модальне вікно | [`ContactForm.jsx`](src/components/ContactForm.jsx) | стан `isOpen`; `setTimeout` у `useEffect` відкриває вікно через 60 000 мс; «Закрити» запам'ятовується в `sessionStorage` |
| Тема | [`App.jsx`](src/App.jsx), [`Header.jsx`](src/components/Header.jsx) | стан `theme`; при завантаженні 07:00–21:00 → `light`, інакше `dark`; кнопка в навігації перемикає вручну; клас `dark` ставиться на `<html>` |

Нічна тема в Tailwind v4 увімкнена рядком `@custom-variant dark (...)` у [`index.css`](src/index.css): `dark:`-класи спрацьовують від класу `dark`, а не від налаштувань ОС.

## Formspree

У [`ContactForm.jsx`](src/components/ContactForm.jsx) замініть `YOUR_FORM_ID` у константі `FORMSPREE_URL` на ID вашої форми з [formspree.io](https://formspree.io).

## Запуск

```bash
npm install
npm run dev      # http://localhost:5173
```

Щоб побачити модальне вікно без очікування, тимчасово змініть `MODAL_DELAY` на `3000`.
