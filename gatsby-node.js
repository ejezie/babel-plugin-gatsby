const path = require("path");

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin(
    {
      name: path.resolve("./plugins/return-hello.js"),
      options: {},
    },

    {
      name: path.resolve("./plugins/gatsby-function.js"),
      options: {},
    }
  )
}
