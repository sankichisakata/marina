/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        water: { DEFAULT: '#0CBBD8', dark: '#0AA2BC', light: '#E0F7FC' },
        yellow: { brand: '#FFE500', dark: '#E6CE00' },
        navy: '#0B1D30',
        surface: '#F8FCFF',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', '"Inter"', 'sans-serif'],
        display: ['"Noto Serif JP"', 'serif'],
      },
      clipPath: {
        diagonal: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)',
        'diagonal-r': 'polygon(0 0, 100% 0, 100% 100%, 0 88%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
