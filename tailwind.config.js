/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#FFD100',
        black: '#000000',
        white: '#ffffff',
        gray: {
          mid: '#222222',
          dark: '#111111',
          '900': '#050505',
          '800': '#0a0a0a',
          '700': '#1a1a1a',
          '600': '#2a2a2a',
        }
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
