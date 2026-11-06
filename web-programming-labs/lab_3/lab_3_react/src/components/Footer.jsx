function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-8 text-slate-300">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
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
    </footer>
  );
}

export default Footer;
