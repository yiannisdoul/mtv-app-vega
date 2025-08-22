/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#000000',
        tertiary: '#171717',
        quaternary: '#1a1a1a',
      },
    },
  },
  plugins: [],
};
