import { useEffect, useState } from 'react';

// ЗАМІНІТЬ YOUR_FORM_ID на ID вашої форми з formspree.io (той самий, що й у частині 1)
const FORMSPREE_URL = 'https://formspree.io/f/maeoeboz';

const MODAL_DELAY = 60000; // 1 хвилина в мілісекундах
const DISMISSED_KEY = 'contactModalDismissed';

const INPUT_CLASS =
  'mb-3 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 focus:outline-2 focus:outline-teal-600 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  // status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  // Через 1 хвилину відкриваємо вікно — якщо користувач його ще не закривав у цій сесії
  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    const timerId = setTimeout(() => setIsOpen(true), MODAL_DELAY);

    // Функція очищення: скасовує таймер, якщо компонент розмонтовано
    return () => clearTimeout(timerId);
  }, []);

  // Закриваючи вікно, запам'ятовуємо це в sessionStorage:
  // у межах сесії (вкладки) воно більше не з'явиться
  function closeModal() {
    setIsOpen(false);
    sessionStorage.setItem(DISMISSED_KEY, 'true');
  }

  // Надсилаємо форму через fetch, щоб не перезавантажувати сторінку.
  // Formspree віддасть JSON, якщо попросити його заголовком Accept.
  async function handleSubmit(event) {
    event.preventDefault(); // скасовуємо стандартне надсилання форми
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(form), // збирає всі поля за атрибутами name
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) {
        throw new Error(`статус ${response.status}`);
      }
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  // Умовний рендеринг: поки isOpen === false, нічого не показуємо
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="max-h-full w-full max-w-md overflow-y-auto rounded-xl bg-white p-6 shadow-2xl dark:bg-slate-800"
      >
        <h2 id="modal-title" className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
          Зворотний зв'язок
        </h2>

        {/* action і method — як у методичці; handleSubmit надсилає ті самі дані через fetch */}
        <form action={FORMSPREE_URL} method="POST" onSubmit={handleSubmit}>
          <label htmlFor="cf-name" className="mb-1 block font-semibold">
            Ім'я
          </label>
          <input id="cf-name" name="name" type="text" required className={INPUT_CLASS} />

          <label htmlFor="cf-email" className="mb-1 block font-semibold">
            Email
          </label>
          <input id="cf-email" name="email" type="email" required className={INPUT_CLASS} />

          <label htmlFor="cf-phone" className="mb-1 block font-semibold">
            Номер телефону
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            placeholder="+380 XX XXX XX XX"
            required
            className={INPUT_CLASS}
          />

          <label htmlFor="cf-message" className="mb-1 block font-semibold">
            Повідомлення
          </label>
          <textarea id="cf-message" name="message" rows={4} required className={INPUT_CLASS} />

          <p role="status" className="mb-2 min-h-6 font-semibold">
            {status === 'sending' && 'Надсилання…'}
            {status === 'success' && (
              <span className="text-green-600 dark:text-green-400">Дякуємо! Повідомлення надіслано.</span>
            )}
            {status === 'error' && (
              <span className="text-red-600 dark:text-red-400">Не вдалося надіслати. Спробуйте ще раз.</span>
            )}
          </p>

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="cursor-pointer rounded-lg bg-teal-700 px-5 py-2 font-semibold text-white transition hover:bg-teal-800 disabled:cursor-wait disabled:opacity-60"
            >
              Надіслати
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="cursor-pointer rounded-lg border border-slate-300 px-5 py-2 font-semibold transition hover:border-teal-600 dark:border-slate-600"
            >
              Закрити
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
