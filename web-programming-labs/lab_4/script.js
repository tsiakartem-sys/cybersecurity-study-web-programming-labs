/* ==========================================================================
   Лабораторна робота №4 (частина 1): JavaScript
   Структура файлу:
   1. Нічна / денна тема
   2. Інформація про браузер і ОС (localStorage) та її показ у футері
   3. Відгуки з сервера (Fetch API)
   4. Модальне вікно із формою зворотного зв'язку
   ========================================================================== */

/* 1. Нічна / денна тема
   -------------------------------------------------------------------------- */

const themeButton = document.getElementById('theme-toggle');

// Денна тема — з 07:00 до 21:00 (21:00 уже нічна), решту часу — нічна
function getThemeByTime() {
  const hours = new Date().getHours(); // 0–23
  return hours >= 7 && hours < 21 ? 'light' : 'dark';
}

// Ставимо атрибут data-theme на <html> (CSS реагує на нього) і міняємо підпис кнопки
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.textContent = theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема';
}

// Автоматичний вибір теми при завантаженні сторінки
applyTheme(getThemeByTime());

// Ручне перемикання по кліку
themeButton.addEventListener('click', function () {
  const current = document.documentElement.dataset.theme;
  applyTheme(current === 'dark' ? 'light' : 'dark');
});


/* 2. Інформація про браузер і ОС
   -------------------------------------------------------------------------- */

// Збираємо все, що браузер повідомляє про систему, у звичайний об'єкт
function collectSystemInfo() {
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    vendor: navigator.vendor,
    language: navigator.language,
    languages: navigator.languages.join(', '),
    cookiesEnabled: navigator.cookieEnabled,
    online: navigator.onLine,
    cpuCores: navigator.hardwareConcurrency,
    screen: screen.width + '×' + screen.height,
    window: window.innerWidth + '×' + window.innerHeight,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}

// localStorage зберігає лише рядки, тому кожне значення зберігаємо окремим ключем
function saveSystemInfo() {
  const info = collectSystemInfo();
  for (const key in info) {
    localStorage.setItem(key, String(info[key]));
  }
}

// Виводимо ВСЕ, що є в localStorage, списком у футері
function showLocalStorage() {
  const list = document.getElementById('system-info');
  list.innerHTML = '';

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    const item = document.createElement('li');
    const label = document.createElement('strong');
    label.textContent = key + ': ';
    // textContent (а не innerHTML) — значення виводиться як текст, а не як HTML
    item.append(label, localStorage.getItem(key));
    list.append(item);
  }
}

saveSystemInfo();
showLocalStorage();


/* 3. Відгуки з сервера
   -------------------------------------------------------------------------- */

const VARIANT = 8; // мій номер у журналі групи
const REVIEWS_URL = 'https://jsonplaceholder.typicode.com/posts/' + VARIANT + '/comments';

// async/await: await «чекає» на відповідь сервера, не блокуючи сторінку
async function loadReviews() {
  const status = document.getElementById('reviews-status');
  const list = document.getElementById('reviews-list');

  try {
    const response = await fetch(REVIEWS_URL);
    if (!response.ok) {
      // fetch не кидає помилку на 404/500, тому перевіряємо статус самі
      throw new Error('Сервер відповів зі статусом ' + response.status);
    }
    const comments = await response.json();

    // Коментарі показуємо в тому порядку, в якому їх віддав сервер
    comments.forEach(function (comment) {
      list.append(createReviewCard(comment));
    });
    status.hidden = true;
  } catch (error) {
    status.textContent = 'Не вдалося завантажити відгуки: ' + error.message;
  }
}

// Створює <article class="review"> з іменем, поштою та текстом коментаря
function createReviewCard(comment) {
  const card = document.createElement('article');
  card.className = 'review';

  const name = document.createElement('h3');
  name.className = 'review__name';
  name.textContent = comment.name;

  const email = document.createElement('p');
  email.className = 'review__email';
  email.textContent = comment.email;

  const body = document.createElement('p');
  body.className = 'review__body';
  body.textContent = comment.body;

  card.append(name, email, body);
  return card;
}

loadReviews();


/* 4. Модальне вікно із формою зворотного зв'язку
   -------------------------------------------------------------------------- */

const modal = document.getElementById('contact-modal');
const closeButton = document.getElementById('modal-close');
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitButton = form.querySelector('button[type="submit"]');

const MODAL_DELAY = 60000; // 1 хвилина в мілісекундах
const DISMISSED_KEY = 'contactModalDismissed';

function openModal() {
  modal.hidden = false;
}

// Закриваючи вікно, запам'ятовуємо це в sessionStorage:
// у межах сесії (вкладки) воно більше не з'явиться
function closeModal() {
  modal.hidden = true;
  sessionStorage.setItem(DISMISSED_KEY, 'true');
}

// Показуємо вікно через 1 хвилину — якщо користувач його ще не закривав
if (!sessionStorage.getItem(DISMISSED_KEY)) {
  setTimeout(openModal, MODAL_DELAY);
}

closeButton.addEventListener('click', closeModal);

// Клік по темному фону (поза вікном) теж закриває
modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Надсилаємо форму через fetch, щоб не перезавантажувати сторінку.
// Formspree віддасть JSON, якщо попросити його заголовком Accept.
form.addEventListener('submit', async function (event) {
  event.preventDefault(); // скасовуємо стандартне надсилання форми

  submitButton.disabled = true;
  formStatus.className = 'form-status';
  formStatus.textContent = 'Надсилання…';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form), // збирає всі поля за атрибутами name
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) {
      throw new Error('статус ' + response.status);
    }

    form.reset();
    formStatus.className = 'form-status form-status--ok';
    formStatus.textContent = 'Дякуємо! Повідомлення надіслано.';
  } catch (error) {
    formStatus.className = 'form-status form-status--error';
    formStatus.textContent = 'Не вдалося надіслати (' + error.message + '). Спробуйте ще раз.';
  } finally {
    submitButton.disabled = false;
  }
});
