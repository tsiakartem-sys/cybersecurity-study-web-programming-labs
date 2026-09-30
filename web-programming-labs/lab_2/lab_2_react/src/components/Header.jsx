function Header({ name, title, navigation }) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{title}</p>
      <nav>
        <ul>
          {navigation.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
