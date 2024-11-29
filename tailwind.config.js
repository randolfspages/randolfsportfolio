/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat'],
        logo: ['Outfit'],
      },
      backgroundImage: {
        'my-bg': 'url("bg-image1.jpg")'
      }
    },
  },
  variants: {},
  plugins: [],
}