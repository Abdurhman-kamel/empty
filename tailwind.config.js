/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '200px', // Custom breakpoint for screens with a min-width of 200px
      },
    },
  },
  plugins: [],
}