/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this line if you're using TypeScript
  ],
  theme: {
    extend: {
      colors: {
        bgDarkBlue: '#1E1E1E',
        textBeige: '#E9E3DC',
        accentPurple: '#B3A0CD',
        accentLime: '#D1EF53',
      },
    },
    fontFamily: {
      bowlby: ['Bowlby One', 'sans-serif'],
      inter: ['Inter', 'serif'],
    },
  },
  plugins: [],
};
