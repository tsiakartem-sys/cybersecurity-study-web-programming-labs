function Experience() {
  return (
    <section id="experience">
      <h2>Досвід</h2>

      <article>
        <h3>Лабораторні роботи з вебпрограмування</h3>
        <p><time dateTime="2026-09">Вересень 2026</time> — теперішній час</p>
        <p>Навчальні проєкти в межах курсу «Вебпрограмування».</p>
        <ul>
          <li>Створення семантичної HTML-розмітки сторінок.</li>
          <li>Розробка інтерфейсів на React із використанням компонентів.</li>
          <li>Контроль версій за допомогою Git та публікація коду на GitHub.</li>
        </ul>
      </article>

      <article>
        <h3>Участь у CTF-змаганнях</h3>
        <p><time dateTime="2025">2025</time> — теперішній час</p>
        <p>
          Розв'язування задач категорій Web, Crypto та Forensics на платформах на кшталт{' '}
          <a href="https://ctftime.org" target="_blank" rel="noopener noreferrer">CTFtime</a>.
        </p>
      </article>
    </section>
  );
}

export default Experience;
