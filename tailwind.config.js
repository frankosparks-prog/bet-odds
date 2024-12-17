/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}

