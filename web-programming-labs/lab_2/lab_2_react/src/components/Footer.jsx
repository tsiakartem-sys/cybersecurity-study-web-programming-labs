function Footer({ name, contacts }) {
  return (
    <footer>
      <h2>Контакти</h2>
      <address>
        <ul>
          <li>
            Email: <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </li>
          <li>
            GitHub:{' '}
            <a
              href={`https://github.com/${contacts.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contacts.github}
            </a>
          </li>
          <li>Місто: {contacts.city}</li>
        </ul>
      </address>
      <p>
        <small>&copy; 2026 {name}</small>
      </p>
      <p>
        <a href="#">Нагору</a>
      </p>
    </footer>
  );
}

export default Footer;
