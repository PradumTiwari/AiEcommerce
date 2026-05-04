/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
      colors: {
        cream: {
          50:  '#fdfaf5',
          100: '#f9f3e8',
          200: '#f0e3cc',
        },
        clay: {
          400: '#c4956a',
          500: '#b07d52',
          600: '#8f6038',
        },
        bark: {
          800: '#2a1f14',
          900: '#1a1209',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease both',
        'float': 'float 4s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
        'slide-in': 'slideIn 0.35s ease both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        slideIn: {
          from: { transform: 'translateX(100%)' },
          to:   { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
