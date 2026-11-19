/* ==========================================================================
   Лабораторна робота №6: Node.js-сервер на Koa (варіант 8)
   Структура файлу:
   1. Налаштування (хост, порт, шляхи)
   2. Валідація даних форми
   3. Обробка помилок
   4. Маршрут POST /api/contact
   5. Роздача статичних файлів і запуск сервера
   ========================================================================== */

import Koa from 'koa';
import { Router } from '@koa/router';
import { bodyParser } from '@koa/bodyparser';
import serve from 'koa-static';
import { mkdir, appendFile } from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { networkInterfaces } from 'node:os';


/* 1. Налаштування
   -------------------------------------------------------------------------- */

const HOST = '0.0.0.0'; // слухаємо всі мережеві інтерфейси, а не лише localhost
const PORT = 3000;

// Абсолютні шляхи будуємо від каталогу, де лежить server.js
const PROJECT_DIR = import.meta.dirname;
const PUBLIC_DIR = path.join(PROJECT_DIR, 'public');
const DATA_DIR = path.join(PROJECT_DIR, 'data'); // поза public/ — браузер його не отримає
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback.jsonl');

// Додаткове поле варіанта 8: topic — лише одне з трьох значень <select>
const TOPICS = ['cooperation', 'internship', 'other'];

// Максимальна довжина кожного поля (у символах)
const MAX_LENGTH = {
  name: 100,
  email: 254,
  subject: 150,
  message: 2000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


/* 2. Валідація
   -------------------------------------------------------------------------- */

// Повертає текст помилки або null, якщо дані коректні
function validateFeedback(body) {
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return 'Тіло запиту має бути JSON-об\'єктом.';
  }

  for (const field of ['name', 'email', 'subject', 'message']) {
    const value = body[field];

    if (typeof value !== 'string') {
      return `Поле «${field}» має бути рядком.`;
    }
    if (value.trim() === '') {
      return `Поле «${field}» не може бути порожнім.`;
    }
    if (value.trim().length > MAX_LENGTH[field]) {
      return `Поле «${field}» задовге (максимум ${MAX_LENGTH[field]} символів).`;
    }
  }

  if (!EMAIL_PATTERN.test(body.email.trim())) {
    return 'Вкажіть коректну email-адресу.';
  }

  if (!TOPICS.includes(body.topic)) {
    return 'Оберіть тему звернення зі списку.';
  }

  return null;
}


/* 3. Обробка помилок
   -------------------------------------------------------------------------- */

const app = new Koa();

// Перший middleware: ловить помилки з усіх наступних
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    const status = error.status || 500;

    if (status >= 500) {
      // Технічні деталі — лише в журнал сервера, браузеру — загальна відповідь
      console.error(error);
      ctx.status = 500;
      ctx.body = { ok: false, error: 'Внутрішня помилка сервера.' };
      return;
    }

    // Помилки клієнта (4xx)
    ctx.status = status;
    if (status === 413) {
      ctx.body = { ok: false, error: 'Запит завеликий (максимум 10 КБ).' };
    } else if (ctx.path.startsWith('/api/')) {
      // bodyParser не зміг розібрати JSON
      ctx.body = { ok: false, error: 'Тіло запиту має бути коректним JSON.' };
    } else {
      // наприклад, спроба вийти за межі public/ через ../
      ctx.body = { ok: false, error: 'Некоректний запит.' };
    }
  }
});

// Читаємо лише JSON і обмежуємо розмір тіла запиту
app.use(bodyParser({ enableTypes: ['json'], jsonLimit: '10kb' }));


/* 4. Маршрут POST /api/contact
   -------------------------------------------------------------------------- */

const router = new Router();

router.post('/api/contact', async (ctx) => {
  const body = ctx.request.body;

  const error = validateFeedback(body);
  if (error) {
    ctx.status = 400;
    ctx.body = { ok: false, error };
    return;
  }

  // id і createdAt створює сервер — значенням від браузера не довіряємо
  const record = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    name: body.name.trim(),
    email: body.email.trim(),
    subject: body.subject.trim(),
    topic: body.topic,
    message: body.message.trim(),
  };

  try {
    await mkdir(DATA_DIR, { recursive: true });
    // JSON Lines: один об'єкт = один рядок, дописуємо в кінець файлу
    await appendFile(FEEDBACK_FILE, JSON.stringify(record) + '\n', 'utf8');
  } catch (fileError) {
    console.error('Не вдалося зберегти звернення:', fileError);
    ctx.status = 500;
    ctx.body = { ok: false, error: 'Не вдалося зберегти звернення. Спробуйте пізніше.' };
    return;
  }

  ctx.status = 201;
  ctx.body = { ok: true, message: 'Звернення збережено локально.', id: record.id };
});

app.use(router.routes());
app.use(router.allowedMethods()); // GET /api/contact → 405 Method Not Allowed


/* 5. Статичні файли та запуск
   -------------------------------------------------------------------------- */

// koa-static роздає лише вміст public/; шлях /data/... поверне 404
app.use(serve(PUBLIC_DIR));

// Приватні IPv4-адреси комп'ютера — щоб знати, що відкрити з телефона
function getLanAddresses() {
  return Object.values(networkInterfaces())
    .flat()
    .filter((net) => net.family === 'IPv4' && !net.internal)
    .map((net) => net.address);
}

app.listen(PORT, HOST, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}`);
  for (const address of getLanAddresses()) {
    console.log(`У локальній мережі:  http://${address}:${PORT}`);
  }
  console.log('Зупинити сервер: Ctrl+C');
});
