/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        bg: '#0a0a0f',
        bg2: '#0f0f17',
        bg3: '#141420',
        cyan: '#00e5cc',
        cyan2: '#00b8a4',
        amber: '#f5a623',
        card: 'rgba(20,20,32,0.8)',
      },
    },
  },
  plugins: [],
}
