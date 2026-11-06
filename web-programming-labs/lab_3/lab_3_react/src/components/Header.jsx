const NAV_LINKS = [
  { href: '#about', label: 'Про мене' },
  { href: '#skills', label: 'Навички' },
  { href: '#experience', label: 'Досвід' },
  { href: '#education', label: 'Освіта' },
  { href: '#languages', label: 'Мови' },
];

function Header() {
  return (
    <header className="flex flex-col items-center bg-linear-to-br from-slate-900 to-teal-800 px-6 py-10 text-center text-white shadow-lg">
      <h1 className="mb-2 text-4xl font-bold tracking-wide md:text-5xl">Артем Цяк</h1>
      <p className="text-lg text-teal-100">
        Студент спеціальності «Кібербезпека» · Junior Security Enthusiast
      </p>
      <nav className="mt-6">
        <ul className="flex flex-wrap justify-center gap-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-full border border-teal-300/50 px-4 py-1.5 text-sm font-medium transition hover:scale-105 hover:bg-teal-300 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
