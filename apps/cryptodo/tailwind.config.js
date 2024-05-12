/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        customColor: '#0C162F',
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}