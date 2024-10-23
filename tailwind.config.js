/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Arima:"'Arima', system-ui",
        Poppins:"'Poppins', sans-serif",
        Sixtyfour:"'Sixtyfour Convergence', sans-serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

