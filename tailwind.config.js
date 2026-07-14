/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F3EA',
        primary: '#1A1A1A',
        accent: '#F2B530',
        stroke: '#E5E5E5',
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', '"Space Mono"', 'monospace'],
        display: ['"VT323"', 'monospace'],
      },
      backgroundImage: {
        'noise': "url('/assets/noise.png')",
      }
    },
  },
  plugins: [],
}
