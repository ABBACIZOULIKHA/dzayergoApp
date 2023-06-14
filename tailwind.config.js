/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
      }
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2xl": "1536px",
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'violet': '#461A3E',
      'rose': '#C93A41',
      'white': '#FFFFFF' , 
      'tchini': '#FF5243' ,
      'beige': '#FBBE85' , 
      'black': '#000000' , 
      'lightgris' : '#D9D9D9' ,
      'textgris' : '#9FA2B4' , 
       
    }, 

  },
  plugins: [],
}