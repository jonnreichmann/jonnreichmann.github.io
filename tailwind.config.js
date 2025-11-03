/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // toggled via <html class="dark">
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e90ff',
        primaryDark: '#1d4ed8',
        slate900x: '#0f172a',
        slate800x: '#1e293b',
      },
      borderRadius: {
        'xl2': '14px', // for the logo
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0,0,0,.1)',
        cardLg: '0 20px 25px -5px rgba(0,0,0,.1)',
      },
      backgroundImage: {
        hero: 'linear-gradient(135deg, #1e293b 0%, #0f172a 60%, #0b2458 100%)',
        accent: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
      },
    },
  },
  plugins: [],
}
