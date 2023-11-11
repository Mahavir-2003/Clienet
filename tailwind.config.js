/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        "primary": ['Plus Jakarta Sans', 'sans-serif'],
        "secondary": ['Inter', 'sans-serif'],
      },
      colors:{
          "primary-light" : "#fbf8f1",
          "primary-dark" : "#050505",
          "secondary-blue-dark" : "#683cec",
          "secondary-blue-light" : "#646fe5",
          "dark-pink" : "#f0a4b9",
          "light-pink" : "#fbdceb",
          "bright-yellow" : "#ffe01b",
          "light-green" : "#3becb8",
          "light-orange" : "#ffaa89",
          "paper-yellow" : "#fffeec",
          "light-yellow" : "#fff3d8",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
