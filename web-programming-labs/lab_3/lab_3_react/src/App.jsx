import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 font-sans text-slate-800">
      <Header />
      {/* Один стовпець на телефоні, два — починаючи з md (768px) */}
      <main className="mx-auto grid w-full max-w-5xl flex-1 gap-6 px-4 py-8 md:grid-cols-2">
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
