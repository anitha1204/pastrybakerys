/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#C18051', 
        secondary: '#EDE6DF',
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"
        },
      },
      fontFamily: {
        butler: ['Butler', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}