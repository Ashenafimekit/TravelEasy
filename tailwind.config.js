/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors : {
        darkGray : "#2b2b2b",
        lightGray : "#d1d1d1"
      }
    },
  },
  plugins: [],
}

