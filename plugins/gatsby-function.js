
const axios = require('axios')
var path = require('path')

var url =  "../src/api/gatsby-func"

module.exports = function (babel) {
  
  const newFunction = babel.template.statement.ast(
    `async (req, res) =>  {

        const result = (await axios.get('../src/api/gatsby-func')).data;
        return res.json(result)

    }`
  );

  return {
    name: "gatsby-function", // not required
    visitor: {
      ArrowFunctionExpression(path) {
        if (path.parent.callee && path.parent.callee.name === "useGet") {
          path.replaceWith(
            newFunction
          );
        }
      }
    }
  };
};