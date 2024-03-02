/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      width: {
        '88': '22rem',
      },
      colors: {
        myblue: '#00F5FF',
        mypurple: '#F637EC',
      },
      scale: {
        '80': '.8',
      },
    },
  },
  plugins: [],
}