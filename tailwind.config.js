/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}