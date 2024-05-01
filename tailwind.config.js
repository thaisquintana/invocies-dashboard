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
        'taupe-gray': '#86878b',
        "deep-space-sparkle": '#406a76',
        'weldon-blue': '#7c98a1',
        'alice-blue': '#f1f7fc',
        'warm-black': '#053b4b',
        'ghost-writer': '#f7fbfc',
      },
    },
  },
  plugins: [],
}

