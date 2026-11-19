function Languages() {
  return (
    <section
      id="languages"
      className="scroll-mt-4 rounded-xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
    >
      <h2 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
        Мови
      </h2>
      <ul className="flex flex-col gap-3 sm:flex-row">
        <li className="flex-1 rounded-lg bg-slate-50 px-4 py-3 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
          Українська — рідна
        </li>
        <li className="flex-1 rounded-lg bg-slate-50 px-4 py-3 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
          Англійська — B2
        </li>
      </ul>
    </section>
  );
}

export default Languages;
