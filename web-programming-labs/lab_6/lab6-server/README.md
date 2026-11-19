# Лабораторна робота №6: Node.js-сервер (варіант 8)

- **Фреймворк:** [Koa](https://koajs.com)
- **Додаткове поле:** `topic`. Це обов'язкове поле, сервер приймає лише одне з трьох значень `<select>`: `cooperation` (Співпраця), `internship` (Стажування), `other` (Інше).

Сервер роздає сайт-резюме з `public/` і приймає форму зворотного зв'язку. Звернення зберігаються локально у файлі `data/feedback.jsonl`. Зовнішні сервіси не використовуються.

## Запуск

```bash
npm install
npm start
```

- На цьому комп'ютері сайт відкривається за адресою http://localhost:3000.
- З телефона в тій самій Wi-Fi мережі: `http://<IP комп'ютера>:3000`. Адресу сервер виводить у термінал під час запуску.
- Зупинити сервер: `Ctrl + C`.

## Структура

```
lab6-server/
├── server.js          # Koa: статика, POST /api/contact, валідація, запис у файл
├── package.json       # залежності та скрипт npm start
├── public/            # статичний сайт (роздається браузеру)
│   ├── index.html     # резюме + форма зворотного зв'язку
│   ├── styles.css
│   └── script.js      # надсилання форми через fetch у форматі JSON
└── data/              # поза public/: браузер не може завантажити звідси файли
    ├── .gitkeep
    └── feedback.jsonl # звернення (JSON Lines, у .gitignore)
```

## API

`POST /api/contact` з тілом JSON (не більше 10 КБ):

```json
{ "name": "Test User", "email": "test@example.com", "subject": "Lab 6",
  "topic": "internship", "message": "Local persistence test" }
```

| Код | Коли |
|-----|------|
| `201 Created` | Дані коректні, звернення збережено: `{"ok":true,"message":"...","id":"..."}` |
| `400 Bad Request` | Помилка валідації або некоректний JSON: `{"ok":false,"error":"..."}` |
| `413 Payload Too Large` | Тіло запиту більше за 10 КБ |
| `500 Internal Server Error` | Не вдалося записати файл (деталі лише в журналі сервера) |

## Перевірка через curl

Тіла тестових запитів лежать у папці `requests/`. Так команди однаково працюють у PowerShell, cmd і bash, без проблем з лапками.

```powershell
# коректний запит → 201 Created
curl.exe -i -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" --data-binary "@requests/valid.json"

# некоректний запит (поганий email і topic) → 400 Bad Request, рядок у файл не додається
curl.exe -i -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" --data-binary "@requests/invalid.json"

# файл зі зверненнями недоступний через браузер → 404 Not Found
curl.exe -i http://localhost:3000/data/feedback.jsonl
```

У PowerShell пиши саме `curl.exe`, бо просто `curl` там є псевдонімом іншої команди.
