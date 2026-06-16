

/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        // Warm paper background — sophisticated, editorial
        paper: {
          50: '#FDFCF8',
          100: '#FBF9F2',
          200: '#F5F1E6',
          300: '#EAE3CF',
        },
        // Deep ink navy — primary
        ink: {
          50: '#F4F6FA',
          100: '#E3E8F3',
          200: '#C2CCE2',
          300: '#94A3C7',
          400: '#5C6F9E',
          500: '#3A4D7E',
          600: '#243766',
          700: '#172548',
          800: '#0E1731',
          900: '#070C1E',
          950: '#03060F',
        },
        // Purple — signature brand accent (#613298)
        signal: {
          50: '#faf5ff',
          100: '#f2e6fd',
          200: '#e2c9fb',
          300: '#c99ef5',
          400: '#a96de9',
          500: '#8847d4',
          600: '#613298',
          700: '#4e2880',
          800: '#391a60',
          900: '#240f3e',
        },
        // Brand purple — same scale, partner + cooperation pages
        brand: {
          50: '#faf5ff',
          100: '#f2e6fd',
          200: '#e2c9fb',
          300: '#c99ef5',
          400: '#a96de9',
          500: '#8847d4',
          600: '#613298',
          700: '#4e2880',
          800: '#391a60',
          900: '#240f3e',
          950: '#140824',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}

