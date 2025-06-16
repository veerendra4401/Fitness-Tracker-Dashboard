/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#10B981',
        accent: '#F59E0B',
        background: {
          light: '#F3F4F6',
          dark: '#1F2937'
        },
        'card-bg': {
          light: '#FFFFFF',
          dark: '#374151'
        }
      },
    },
  },
  plugins: [],
} 