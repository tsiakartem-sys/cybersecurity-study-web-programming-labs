import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './components/Footer';
import cv from './data/cv';

function App() {
  return (
    <div>
      <Header name={cv.name} title={cv.title} navigation={cv.navigation} />
      <main>
        <About paragraphs={cv.about} />
        <Skills skills={cv.skills} />
        <Experience jobs={cv.experience} />
        <Education
          university={cv.education.university}
          specialty={cv.education.specialty}
          period={cv.education.period}
          courses={cv.education.courses}
        />
        <Languages languages={cv.languages} />
      </main>
      <Footer name={cv.name} contacts={cv.contacts} />
    </div>
  );
}

export default App;
