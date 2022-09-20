
const axios = require('axios')
var path = require('path')

module.exports = function (babel) {
  
  const newFunction = babel.template.statement.ast(
    `async () =>  {

        const result = (await axios.get(path.resolve('./api/gatsby-func'))).data;
        return result

    }`
  );

  return {
    name: "gatsby-function", // not required
    visitor: {
      ArrowFunctionExpression(path) {
        if (path.parent.callee && path.parent.callee.name === "useGet" ) {
          path.replaceWith(
            newFunction
          );
        }
      }
    }
  };
};

// && path.container[0].body.body[0].argument.extra.rawValue !== "Hello"