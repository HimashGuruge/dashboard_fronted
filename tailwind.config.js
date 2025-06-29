/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#121212',          // true dark background
          surface: '#1f2937',     // surface cards/containers
          text: '#e0e0e0',        // light text
          border: '#444444',      // muted border
          hover: '#2a2a2a',       // hover states
          accent: '#3b82f6',      // optional highlight (blue-500)
        },
      },
    },
  },
  plugins: [],
}
