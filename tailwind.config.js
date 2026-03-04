/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0a0a0a',
        surface: '#111111',
        elevated: '#1a1a1a',
        border: '#262626',
        muted: '#737373',
        accent: '#FF9500',
        'accent-dark': '#E68500',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        /* Large display fonts for hero and section headings */
        'display': ['clamp(3rem, min(14vw, 12vh), 8rem)', { lineHeight: '1', letterSpacing: '-0.04em' }],
        'display-sm': ['clamp(2.25rem, min(9vw, 8vh), 5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
