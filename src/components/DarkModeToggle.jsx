import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Dark Mode"
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg border font-medium shadow-sm
        transition-colors duration-200 ease-in-out
        bg-white text-black border-gray-300 hover:bg-gray-100
        dark:bg-[#1f2937] dark:text-[#e0e0e0] dark:border-[#444] dark:hover:bg-[#2a2a2a]
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
      `}
    >
      {darkMode ? (
        <>
          <span>🌙</span>
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <span>☀️</span>
          <span>Light Mode</span>
        </>
      )}
    </button>
  );
}
