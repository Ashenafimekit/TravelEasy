/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors : {
        darkGray : "#1a1a1a",
        lightGray : "#d1d1d1"
      }
    },
  },
  plugins: [],
}

