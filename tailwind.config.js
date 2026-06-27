/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-oscuro': '#1e4037',
        'verde-claro': '#4ade80',
        'amarillo-suave': '#fef08a',
        'gris-claro': '#f3f4f6'
      }
    },
  },
  plugins: [],
}
