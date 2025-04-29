/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all JS/TSX/TS files in the src folder
  ],
  theme: {
    
    extend: {
      fontFamily: {
        // Correctly referencing 'Inter' font family
        Inter: ['Inter', 'sans-serif'],
      },
      textColor: {
        primary: '#1570EF', // Custom primary color for text
        secondary: '#009ED8', // Custom secondary color for text
        success: '#10A760', 
        gray: '#667085', // Custom gray color for text
        darkgray: '#48505E', // Custom dark gray color for text
        warning: '#E19133', // Custom warning color for text
        lightgray:'#858D9D',
        slate:'#5D6679',
        warning:'#E19800',
        danger:'#DA3E33',
        blue: '#1366D9',
        red: '#F36960',
      },
      backgroundColor: {
        primary: '#1366D9', // Custom primary background color
        lightgray: '#EEEEEE', // Custom light gray background color
        gray:'#D0D3D9'
      }
    },
  },
  plugins: [],
}
