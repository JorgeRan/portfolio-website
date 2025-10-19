/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: "#00BFA6",
          blue: "#004E89",
          
        },
        neutral: {
          light: "#F7F7F7",
          white: "#FFFFFF",
          gray: "#B0B0B0",
          dark: "#333333",
          
        },
        magenta: '#4CAF50',
        yellow: "#FFC107",
        red: "#df6565ff"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'xl': '12px',
      },
    },
  },
  plugins: [],
}

