/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    backgroundImage: {
      'consul': "url('./Images/Consul.jpg')",
      'content': "url('./Images/Herobg.jpg')",
      'about': "url('./Images/bro.png')",
      'frame': "url('./Images/Frame 2.png')",
    },
  },
  plugins: [],
}

