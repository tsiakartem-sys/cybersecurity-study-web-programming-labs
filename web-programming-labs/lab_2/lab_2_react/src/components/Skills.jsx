function Skills({ skills }) {
  return (
    <section id="skills">
      <h2>Навички</h2>
      {skills.map((skillGroup) => (
        <div key={skillGroup.group}>
          <h3>{skillGroup.group}</h3>
          <ul>
            {skillGroup.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
