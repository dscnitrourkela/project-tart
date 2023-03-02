/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
  extend: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '4xl': '32px',
      '5xl': '36px',
      '8xl': '48px',
      '11xl': '64px',
    },
    lineHeight: {
      4: '16px',
      4.5: '18px',
      5: '20px',
      6: '24px',
      9: '36px',
      12: '48px',
      16: '64px',
      24: '96px',
    },

    colors: {
      'color-primary': '#181818',
      'color-secondary': '#414141',
      'color-tertiary': '#616161',
      'brand-left': '#6B014E',
      'brand-right': '#03016B',
      'background-primary': '#F9F9F9',
      'background-secondary': '#FFFFFF',
    },
    // Poppins: ['Poppins', 'sans-serif'],
    fontFamily: {
      Poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
},
plugins: [],
};
