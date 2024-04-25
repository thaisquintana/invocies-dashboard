/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#6e1c75',
        'st-patricks-blue': '#211C75',
        'taupe-gray': '#86878b'
      }
    },
  },
  plugins: [],
}

