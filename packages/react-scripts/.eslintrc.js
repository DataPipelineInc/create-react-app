const path = require('path')

module.exports = {
  "extends": "datapipeline",
  "env": {
    "jest": true,
  },
  "globals": {
    "__DEV__": false
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
