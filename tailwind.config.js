/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        gerbil: ['"Gerbil"', '"Outfit"', 'sans-serif'],
      },
      colors: {
        bgGray: '#ffffff',
        textDark: '#101010',
        greenHighlight: '#e3f5e9',
        pinkHighlight: '#fcdce8',
        orangeLine: '#fec87b',
        footerBg: '#eefcf1',
        purpleIcon: '#a855f7',
        purpleShape: '#a96cf2',
        coralTri: '#fb7185'
      }
    },
  },
  plugins: [],
};
