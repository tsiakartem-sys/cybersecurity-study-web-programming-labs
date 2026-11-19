import { useEffect, useState } from 'react';

const VARIANT = 8; // мій номер у журналі групи
const REVIEWS_URL = `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`;

function Reviews() {
  // Звичайна змінна не перемальовує компонент, а стан — перемальовує.
  // Тому відгуки, що прийшли із сервера, зберігаємо саме в useState.
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Порожній масив залежностей [] — запит виконується один раз, при монтуванні
  useEffect(() => {
    // ignore захищає від запису в стан, якщо компонент уже розмонтовано
    // (у StrictMode React у розробці монтує компонент двічі)
    let ignore = false;

    async function loadReviews() {
      try {
        const response = await fetch(REVIEWS_URL);
        if (!response.ok) {
          // fetch не кидає помилку на 404/500, тому перевіряємо статус самі
          throw new Error(`Сервер відповів зі статусом ${response.status}`);
        }
        const data = await response.json();
        if (!ignore) setComments(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadReviews();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section
      id="reviews"
      className="scroll-mt-4 rounded-xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
    >
      <h2 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
        Відгуки колишніх роботодавців
      </h2>

      {/* Умовний рендеринг: показуємо те, що відповідає поточному стану */}
      {loading && <p>Завантаження відгуків…</p>}
      {error && <p className="font-semibold text-red-600 dark:text-red-400">Не вдалося завантажити відгуки: {error}</p>}

      <div className="grid gap-3">
        {/* .map() перетворює масив коментарів на масив карток; key — унікальний id коментаря */}
        {comments.map((comment) => (
          <article
            key={comment.id}
            className="rounded-lg border border-l-4 border-slate-200 border-l-teal-500 p-4 dark:border-slate-700 dark:border-l-teal-500"
          >
            <h3 className="font-semibold capitalize">{comment.name}</h3>
            <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">{comment.email}</p>
            <p className="whitespace-pre-line">{comment.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
