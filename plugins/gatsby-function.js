
const axios = require('axios')

module.exports = function (babel) {
  
  const newFunction = babel.template.statement.ast(
    `async (req, res) =>  {

        const listofUsers = (await axios.get('https://official-joke-api.appspot.com/random_joke')).data;
        return res.json(listOfUsers)

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