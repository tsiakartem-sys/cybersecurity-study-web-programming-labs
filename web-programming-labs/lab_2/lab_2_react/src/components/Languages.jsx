function Languages({ languages }) {
  return (
    <section id="languages">
      <h2>Мови</h2>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>
            {language.name} — {language.level}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Languages;
