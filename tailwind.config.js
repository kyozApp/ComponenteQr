/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors: {
        'customcolor': 'hsl(228, 45%, 44%)',
        'whitecolor': 'hsl(0, 0%, 100%)',
        'lightGray': 'hsl(212, 45%, 89%)',
        'grayishBlue': 'hsl(220, 15%, 55%)',
        'darkBlue': 'hsl(218, 44%, 22%)',
      },
      fontSize: {
        'paragraph': '15px',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
      },
      width: {
        '320': '320px',
      },
      height: {
        '500': '500px',
      },
    },
  },
  plugins: [],
}