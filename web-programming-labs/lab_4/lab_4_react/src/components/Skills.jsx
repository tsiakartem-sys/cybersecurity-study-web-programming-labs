const SKILL_GROUPS = [
  {
    title: 'Мови програмування та розмітки',
    items: ['Python', 'JavaScript', 'HTML', 'SQL'],
  },
  {
    title: 'Інструменти',
    items: ['Git та GitHub', 'Linux (Kali, Ubuntu)', 'Wireshark', 'Nmap', 'VS Code'],
  },
  {
    title: 'Знання',
    items: ['Основи мережевих протоколів (TCP/IP, HTTP, DNS)', 'OWASP Top 10', 'Основи криптографії'],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-4 rounded-xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
    >
      <h2 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
        Навички
      </h2>

      {SKILL_GROUPS.map((group) => (
        <div key={group.title} className="mb-5 last:mb-0">
          <h3 className="mb-2 text-lg font-semibold text-slate-700 dark:text-slate-200">{group.title}</h3>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800 ring-1 ring-teal-200 dark:bg-teal-900/40 dark:text-teal-100 dark:ring-teal-800 transition hover:bg-teal-600 hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
