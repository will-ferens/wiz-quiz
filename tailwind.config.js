/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'blue-lagoon': {
          50: '#eefffe',
          100: '#c5fffe',
          200: '#8bfffe',
          300: '#4afefd',
          400: '#15e6ec',
          500: '#00c8d0',
          600: '#009fa8',
          700: '#007e88',
          800: '#066069',
          900: '#0a5157',
          950: '#002e35',
        },
      },
    },
  },
  plugins: [],
  darkMode: '',
};
