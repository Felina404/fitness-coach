import {  useEffect, useState } from 'react'


function App() {

   const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = raw !== null ? raw === 'true' : prefersDark;

    setIsDarkMode(initial);
    document.documentElement.classList.toggle('dark', initial);
    localStorage.setItem('darkMode', String(initial));
  }, []);
  

  const toggleDark = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('darkMode', String(next));
      return next;
    });
  };

  return (
    <div className="bg-fg t">
      <h1 className="text-4xl font-bold text-primary">Hello from Vite 6 + React + TS</h1>
      <button onClick={toggleDark} className="bg-primary text-white p-2 rounded-md">
        Toggle Dark Mode
      </button>
    </div>
  )
}

export default App
 