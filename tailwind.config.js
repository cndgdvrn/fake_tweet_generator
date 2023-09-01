/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'twitter-gray' : "#71767B",
        'twitter-blue' : "#1D9BF0"
      }
    },
  },
  plugins: [],
}