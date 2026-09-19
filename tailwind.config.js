/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050D0C',
          900: '#081312', // deep spruce obsidian
          850: '#0C1A18',
          800: '#112220',
          700: '#1A3330',
          600: '#254541',
        },
        ivory: {
          50: '#FAF8F5',
          100: '#F5F1EA',
          200: '#E8E1D5',
          300: '#D5CCBD',
          400: '#ABA08F',
          500: '#857A6B',
        },
        gold: {
          300: '#E5CB95',
          400: '#D4BA7E',
          500: '#C6A868', // requested warm champagne gold
          600: '#B09050',
          700: '#8A6E3B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.28em',
        'luxury': '0.35em',
      },
      boxShadow: {
        'gold-glow': '0 0 30px -5px rgba(198, 168, 104, 0.22)',
        'luxury-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(198, 168, 104, 0.15)',
        'float-bar': '0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(32, 51, 46, 0.8)',
      },
    },
  },
  plugins: [],
}
