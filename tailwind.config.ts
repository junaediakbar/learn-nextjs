import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const config: Config = {
  mode: 'jit',

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        sky: colors.sky,
        primary: {
          400: '#00E0F3',
          500: '#00c4fd',
        },
        dark: '#222222',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
