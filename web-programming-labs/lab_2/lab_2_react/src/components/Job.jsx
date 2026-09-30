// Повторно використовуваний компонент: один запис досвіду.
function Job({ title, period, description, achievements }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{period}</p>
      <p>{description}</p>
      {achievements.length > 0 && (
        <ul>
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default Job;
