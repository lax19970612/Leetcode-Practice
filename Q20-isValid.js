/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const pair = {
      ')': '(',
      ']': '[',
      '}': '{',
  };


  for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
      if (char === '(' || char === '[' || char === '{') {
          stack.push(char);
      } else {
          const stackTop = stack[stack.length - 1];
          if (stackTop === pair[char]) {
              stack.pop();
          } else {
              stack.push(char);
              break;
          }
      }
  }

  return stack.length === 0;
};