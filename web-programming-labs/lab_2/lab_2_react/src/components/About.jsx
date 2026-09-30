function About({ paragraphs }) {
  return (
    <section id="about">
      <h2>Про мене</h2>
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </section>
  );
}

export default About;
