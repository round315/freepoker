/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'sky-950':'#00284d',
      },
      height: {
        '120': '120%',
      },
      width: {
        '120': '600px',
      },
      top: {
        '18': '70px',
      },
      rounded: {
        'r60': '60%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

    },

  },
  plugins: [],
}
