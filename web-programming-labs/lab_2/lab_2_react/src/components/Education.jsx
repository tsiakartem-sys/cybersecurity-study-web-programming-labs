function Education({ university, specialty, period, courses }) {
  return (
    <section id="education">
      <h2>Освіта</h2>
      <article>
        <h3>{university}</h3>
        <p>Спеціальність: {specialty}</p>
        <p>{period}</p>
      </article>

      <h3>Курси та сертифікати</h3>
      <ol>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ol>
    </section>
  );
}

export default Education;
