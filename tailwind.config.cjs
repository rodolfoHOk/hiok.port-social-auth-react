/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato'],
        Capriola: ['Capriola'],
      },
      keyframes: {
        toastInRight: {
          '0%': { transform: 'translateX(100%)' },
          '80%': { transform: 'translateX(-40px)' },
          '100%': { transform: 'translateX(0)' },
        },
        toastInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '80%': { transform: 'translateX(40px)' },
          '100%': { transform: 'translateX(0)' },
        },
        toastInTop: {
          '0%': { transform: 'translateY(-100%)' },
          '80%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        toastInBottom: {
          '0%': { transform: 'translateY(100%)' },
          '80%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        navInTop: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '35%': { opacity: 0 },
          '80%': { transform: 'translateY(12px)' },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        toastInRight: 'toastInRight 0.5s ease-in-out',
        toastInLeft: 'toastInLeft 0.5s ease-in-out',
        toastInTop: 'toastInTop 0.5s ease-in-out',
        toastInBottom: 'toastInBottom 0.5s ease-in-out',
        navInTop: 'navInTop 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
