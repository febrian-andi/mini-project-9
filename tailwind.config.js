/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-primary": "#FCCA09",
        "yellow-primary-darker": "#FEC00A",
      },
    },
  },
  plugins: [],
}