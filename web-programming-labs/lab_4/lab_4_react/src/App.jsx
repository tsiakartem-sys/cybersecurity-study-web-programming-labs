import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

// Денна тема — з 07:00 до 21:00 (21:00 уже нічна), решту часу — нічна
function getThemeByTime() {
  const hours = new Date().getHours(); // 0–23
  return hours >= 7 && hours < 21 ? 'light' : 'dark';
}

function App() {
  const [theme, setTheme] = useState('light');

  // Автоматичний вибір теми: виконується один раз, після першого рендеру
  useEffect(() => {
    setTheme(getThemeByTime());
  }, []);

  // Щоразу, коли theme змінюється, додаємо/прибираємо клас "dark" на <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Ручне перемикання (передається в Header як проп)
  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-100 font-sans text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      {/* Одна колонка: секції йдуть одна під одною по порядку */}
      <main className="mx-auto grid w-full max-w-3xl flex-1 content-start gap-6 px-4 py-8">
        <About />
        <Skills />
        <Experience />
        <Reviews />
        <Education />
        <Languages />
      </main>
      <Footer />
      <ContactForm />
    </div>
  );
}

export default App;
