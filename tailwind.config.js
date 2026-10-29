/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    screens: {
      tablet: '701px',
      desktop: '1024px',
      wide: '1200px',
    },
    extend: {
      colors: {
        brand: {
          pink: '#e9828d',
          green: '#649d8d',
          mint: '#92c5b6',
          ink: '#3a4245',
          deep: '#20292c',
          hover: '#f29882',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'hero-mobile': 'clamp(34px, 8.4vw, 52px)',
        'hero-tablet': 'clamp(38px, 5vw, 52px)',
        hero: 'clamp(42px, 5.4vw, 76px)',
        profession: 'clamp(17px, 1.7vw, 22px)',
        'section-title': 'clamp(32px, 3.2vw, 44px)',
      },
      spacing: {
        panel: 'clamp(24px, 3.5vw, 48px)',
        section: 'clamp(72px, 8vw, 112px)',
      },
      width: {
        shell: 'min(calc(100% - clamp(20px, 4vw, 64px) * 2), 1200px)',
      },
      keyframes: {
        settle: {
          from: { opacity: '0.35', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        settle: 'settle 420ms cubic-bezier(0.2, 0.65, 0.3, 1) both',
        'settle-slow': 'settle 700ms cubic-bezier(0.2, 0.65, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
