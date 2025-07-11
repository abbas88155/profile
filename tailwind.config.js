/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '350px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      lightBrown: '#54352a',
      darkBrown: '#2f2523',
      white: '#ffffff',
      cyan: '#15d1e0',
      lightCyan: '#8be5fc',
      darkCyan: '#0e859e',
      orange: '#fb9718',
      lightOrange: '#fac27b',
      darkOrange: '#da8422',
      grey: '#626265',
      lightGrey: '#757b88',
      darkGrey: '#374441',
    },
    extend: {
      boxShadow: {
        cyanShadow: '0px 0px 20px 0px rgba(94, 185, 220, 0.5)',
        cyanMShadow: '10px 10px 200px 158px rgba(94, 185, 220, 0.5)',
        orangeShadow: '10px 10px 200px 150px rgba(240, 169, 70, 0.5)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
