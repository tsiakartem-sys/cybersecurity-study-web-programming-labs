function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-4 rounded-xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
    >
      <h2 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
        Освіта
      </h2>

      <article className="mb-6 border-l-4 border-teal-500 pl-4">
        <h3 className="text-lg font-semibold">Національний університет «Львівська політехніка»</h3>
        <p>Спеціальність: 125 «Кібербезпека та захист інформації»</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          <time dateTime="2025">2025</time> — <time dateTime="2029">2029</time> (очікувано)
        </p>
      </article>

      <h3 className="mb-2 text-lg font-semibold text-slate-700 dark:text-slate-200">Курси та сертифікати</h3>
      <ol className="list-decimal space-y-1 pl-5">
        <li>Cisco Networking Academy — Introduction to Cybersecurity</li>
        <li>freeCodeCamp — Responsive Web Design</li>
      </ol>
    </section>
  );
}

export default Education;
