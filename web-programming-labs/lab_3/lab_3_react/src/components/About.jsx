function About() {
  return (
    <section
      id="about"
      className="scroll-mt-4 rounded-xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-lg"
    >
      <h2 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-bold text-slate-900">
        Про мене
      </h2>
      <p className="mb-3 leading-relaxed">
        Студент Національного університету «Львівська політехніка», який вивчає
        <strong className="text-teal-700"> кібербезпеку</strong> та{' '}
        <strong className="text-teal-700">вебтехнології</strong>.
        Цікавлюся безпекою вебзастосунків, мережами та автоматизацією задач за допомогою Python.
      </p>
      <p className="leading-relaxed">
        Шукаю можливість пройти стажування, щоб застосувати знання на практиці
        та розвиватися в напрямі <em className="font-semibold">Application Security</em>.
      </p>
    </section>
  );
}

export default About;
