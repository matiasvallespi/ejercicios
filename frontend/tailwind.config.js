/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        keyframes: {
          'slide-in-right': {
            '0%': {
              transform: 'translateX(-20px)',
              opacity: '0',
            },
            '100%': {
              transform: 'translateX(0)',
              opacity: '1',
            },
          },
        },
        animation: {
          'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        },
      },
    },
    plugins: [],
  }