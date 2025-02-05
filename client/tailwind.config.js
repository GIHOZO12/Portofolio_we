/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#0A192F",
        "secondary":"#F97316",
        "tertiary":"#54D6BB",
      }
    },
    screens: {
      sm: '640px', // Small screens and up
      md: '768px', // Medium screens and up
      lg: '1024px', // Large screens and up
      xl: '1280px', // Extra large screens and up
      '2xl': '1536px',
    }
  },
  plugins: [],
}