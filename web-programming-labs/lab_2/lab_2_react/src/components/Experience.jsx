import Job from './Job';

function Experience({ jobs }) {
  return (
    <section id="experience">
      <h2>Досвід</h2>
      {jobs.map((job) => (
        <Job
          key={job.id}
          title={job.title}
          period={job.period}
          description={job.description}
          achievements={job.achievements}
        />
      ))}
    </section>
  );
}

export default Experience;
