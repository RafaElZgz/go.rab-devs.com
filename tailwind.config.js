module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,vue,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/dist/*.js",
    "./node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        primary: {
          "50": "#D5E2F1",
          "100": "#C9DAED",
          "200": "#B6CCE7",
          "300": "#98B7DD",
          "400": "#7DA4D4",
          "500": "#5789C7",
          "600": "#4079BF",
          "700": "#386BA8",
          "800": "#2F5A8E",
          "900": "#224167",
        },
      },
      screens: {
        'm320': {'max': '320px' },
      },
    },
  },
  plugins: [
    // https://flowbite.com/
    require('flowbite/plugin'),
    // https://preline.co/
    require('preline/plugin'),
  ],
}
