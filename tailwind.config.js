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
        myorange: '#ff621d',
      },
      scale: {
        '80': '.8',
      },
      animation: {
        'my-pulse': 'my-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'big-pulse': 'big-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fadeIn': 'fadeIn 3s ease-in-out',
        'slideUp': 'slideUp 2s ease-in-out',
        'float': 'float 3s infinite',
      },

    },
  },
  plugins: [],
}