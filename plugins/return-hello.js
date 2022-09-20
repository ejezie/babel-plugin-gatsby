module.exports = function (babel) {
    const { types: t } = babel;
  
    return {
      name: "ast-transform", // not required
      visitor: {
        CallExpression(path) {
          if (
            path.node.callee.name &&
            path.node.callee.name === "useGet" &&
            path.node.arguments[0].body.body[0].argument.value.toLowerCase() === "hello"
          ) {
            path.node.arguments[0].body.body[0].argument.value = "world";
          }
        }
      }
    };
  }