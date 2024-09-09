
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../index.html",
    "../src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#545454',
      },
      fontSize: {
        'custom-size': '24px',
        'extra-large': '32px', 
      },
    },
  },
  plugins: [],
}
