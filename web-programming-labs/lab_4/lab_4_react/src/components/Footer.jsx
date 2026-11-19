import { useEffect, useState } from 'react';

// Збираємо все, що браузер повідомляє про систему
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
    screen: `${screen.width}×${screen.height}`,
    window: `${window.innerWidth}×${window.innerHeight}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}

// Читаємо ВСЕ, що є в localStorage, як масив пар [ключ, значення]
function readLocalStorage() {
  return Object.keys(localStorage).map((key) => [key, localStorage.getItem(key)]);
}

function Footer() {
  // Стан, у якому лежать записи з localStorage. Зміна стану перемальовує футер.
  const [storageItems, setStorageItems] = useState([]);

  // Виконується один раз при монтуванні: зберігаємо дані в localStorage і читаємо їх назад
  useEffect(() => {
    const info = collectSystemInfo();
    Object.entries(info).forEach(([key, value]) => {
      localStorage.setItem(key, String(value)); // localStorage зберігає лише рядки
    });
    setStorageItems(readLocalStorage());
  }, []);

  return (
    <footer className="bg-slate-900 px-6 py-8 text-slate-300 dark:border-t dark:border-slate-800">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="mb-3 text-xl font-bold text-white">Контакти</h2>
          <address className="not-italic">
            <ul className="space-y-1">
              <li>
                Email:{' '}
                <a
                  href="mailto:artem.tsiak.kb.2025@lpnu.ua"
                  className="text-teal-300 underline underline-offset-2 hover:text-teal-100"
                >
                  artem.tsiak.kb.2025@lpnu.ua
                </a>
              </li>
              <li>
                GitHub:{' '}
                <a
                  href="https://github.com/tsiakartem-sys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 underline underline-offset-2 hover:text-teal-100"
                >
                  tsiakartem-sys
                </a>
              </li>
              <li>Місто: Львів, Україна</li>
            </ul>
          </address>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="#"
            className="w-fit rounded-lg bg-teal-600 px-4 py-2 font-medium text-white shadow transition hover:scale-105 hover:bg-teal-500"
          >
            ↑ Нагору
          </a>
          <p>
            <small>&copy; 2026 Артем Цяк</small>
          </p>
        </div>
      </div>

      {/* Системна інформація з localStorage */}
      <div className="mx-auto mt-6 max-w-3xl">
        <h2 className="mb-3 text-xl font-bold text-white">Системна інформація</h2>
        <ul className="space-y-1 text-sm break-words">
          {storageItems.map(([key, value]) => (
            <li key={key}>
              <strong className="text-teal-300">{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
