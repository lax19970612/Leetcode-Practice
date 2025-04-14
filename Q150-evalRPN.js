/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const tokenStack = [];

  for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (token !== '+' && token !== '-' && token !== '*' && token !== '/') {
          tokenStack.push(parseInt(token, 10));
      } else {
          const secondElement = tokenStack.pop();
          const firstElement = tokenStack.pop();
          switch (token) {
              case '+':
                  tokenStack.push(firstElement + secondElement);
                  break;
              case '-':
                  tokenStack.push(firstElement - secondElement);
                  break;
              case '*':
                  tokenStack.push(firstElement * secondElement);
                  break;
              case '/':
                  const value = firstElement / secondElement;
                  tokenStack.push(value > 0 ? Math.floor(value) : Math.ceil(value));
                  break;
              default:
                  break;
          }
      }
  }

  return tokenStack.pop();
};