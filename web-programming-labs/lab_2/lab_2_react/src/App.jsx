import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Languages />
      </main>
      <Footer />
    </div>
  );
}

export default App;
