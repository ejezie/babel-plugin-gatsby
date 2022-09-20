const path = require("path")

module.exports = {
  presets: [
    [
      "babel-preset-gatsby",
      
      {
        "targets": {
          "browsers": [">0.25%", "not dead"]
        }
      }
    ],
   
  ],
  plugins: [
    path.resolve("./plugins/return-hello.js"),
    path.resolve("./plugins/gatsby-function.js"),
    
  ],
}