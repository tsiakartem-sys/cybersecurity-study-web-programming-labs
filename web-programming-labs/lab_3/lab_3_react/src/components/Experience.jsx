function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-4 rounded-xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-lg"
    >
      <h2 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-bold text-slate-900">
        Досвід
      </h2>

      <article className="mb-6 border-l-4 border-teal-500 pl-4">
        <h3 className="text-lg font-semibold">Лабораторні роботи з вебпрограмування</h3>
        <p className="mb-2 text-sm text-slate-500">
          <time dateTime="2026-09">Вересень 2026</time> — теперішній час
        </p>
        <p className="mb-2">Навчальні проєкти в межах курсу «Вебпрограмування».</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Створення семантичної HTML-розмітки сторінок.</li>
          <li>Розробка інтерфейсів на React із використанням компонентів.</li>
          <li>Контроль версій за допомогою Git та публікація коду на GitHub.</li>
        </ul>
      </article>

      <article className="border-l-4 border-teal-500 pl-4">
        <h3 className="text-lg font-semibold">Участь у CTF-змаганнях</h3>
        <p className="mb-2 text-sm text-slate-500">
          <time dateTime="2025">2025</time> — теперішній час
        </p>
        <p>
          Розв'язування задач категорій Web, Crypto та Forensics на платформах на кшталт{' '}
          <a
            href="https://ctftime.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-700 underline underline-offset-2 hover:text-teal-900"
          >
            CTFtime
          </a>
          .
        </p>
      </article>
    </section>
  );
}

export default Experience;
