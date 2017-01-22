const path = require('path')

module.exports = {
  "extends": "datapipeline",
  "env": {
    "jest": true,
  },
  "settings": {
    "import/parser": "babel-eslint",
    "import/resolver": {
      "webpack": {
        "config": path.join(__dirname, "config/webpack.config.dev.js")
      }
    }
  }
}
