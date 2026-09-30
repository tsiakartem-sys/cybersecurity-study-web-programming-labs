// Усі дані резюме в одному місці. Компоненти отримують їх через props.
const cv = {
  name: 'Артем Цяк',
  title: 'Студент спеціальності «Кібербезпека» · Junior Security Enthusiast',

  navigation: [
    { id: 'about', label: 'Про мене' },
    { id: 'skills', label: 'Навички' },
    { id: 'experience', label: 'Досвід' },
    { id: 'education', label: 'Освіта' },
    { id: 'languages', label: 'Мови' },
  ],

  about: [
    'Студент Національного університету «Львівська політехніка», який вивчає кібербезпеку та вебтехнології. Цікавлюся безпекою вебзастосунків, мережами та автоматизацією задач за допомогою Python.',
    'Шукаю можливість пройти стажування, щоб застосувати знання на практиці та розвиватися в напрямі Application Security.',
  ],

  skills: [
    { group: 'Мови програмування та розмітки', items: ['Python', 'JavaScript', 'HTML', 'SQL'] },
    { group: 'Інструменти', items: ['Git та GitHub', 'Linux (Kali, Ubuntu)', 'Wireshark', 'Nmap', 'VS Code'] },
    { group: 'Знання', items: ['Основи мережевих протоколів (TCP/IP, HTTP, DNS)', 'OWASP Top 10', 'Основи криптографії'] },
  ],

  experience: [
    {
      id: 1,
      title: 'Лабораторні роботи з вебпрограмування',
      period: 'Вересень 2026 — теперішній час',
      description: 'Навчальні проєкти в межах курсу «Вебпрограмування».',
      achievements: [
        'Створення семантичної HTML-розмітки сторінок.',
        'Розробка інтерфейсів на React із використанням компонентів.',
        'Контроль версій за допомогою Git та публікація коду на GitHub.',
      ],
    },
    {
      id: 2,
      title: 'Участь у CTF-змаганнях',
      period: '2025 — теперішній час',
      description: "Розв'язування задач категорій Web, Crypto та Forensics на платформах на кшталт CTFtime.",
      achievements: [],
    },
  ],

  education: {
    university: 'Національний університет «Львівська політехніка»',
    specialty: '125 «Кібербезпека та захист інформації»',
    period: '2025 — 2029 (очікувано)',
    courses: [
      'Cisco Networking Academy — Introduction to Cybersecurity',
      'freeCodeCamp — Responsive Web Design',
    ],
  },

  languages: [
    { name: 'Українська', level: 'рідна' },
    { name: 'Англійська', level: 'B2' },
  ],

  contacts: {
    email: 'your.email@example.com',
    github: 'tsiakartem-sys',
    city: 'Львів, Україна',
  },
};

export default cv;
