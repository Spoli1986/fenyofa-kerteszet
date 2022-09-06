module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'menuBackground' : '#78be20'
    },

    extend: {
      backgroundImage : {
        'header-trees' : "./src/assets/images/trees-g5a526eec0_1920.jpg"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
