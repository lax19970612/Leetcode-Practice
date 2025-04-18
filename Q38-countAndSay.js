/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  // countAndSay(1) = 1
  // countAndSay(2) = countAndSay(countAndSay(1)) = 11
  // countAndSay(3) = countAndSay(countAndSay(2)) = 21
  // countAndSay(4) = countAndSay(countAndSay(3)) = 1211
  // countAndSay(5) = countAndSay(countAndSay(4)) = 111221
  // countAndSay(6) = countAndSay(countAndSay(5)) = 312211
  // countAndSay(7) = countAndSay(countAndSay(6)) = 13112221
  // ....

  if (n === 1) return '1';
  let prevCountAndSay = countAndSay(n - 1);
  let currCountAndSay = '';
  let currNumChar = '';
  let count = 0;

  for (let i = 0; i < prevCountAndSay.length; i++) {
      const char = prevCountAndSay.charAt(i);
      if (currNumChar === '' || char === currNumChar) {
          currNumChar = char;
          count++;
      } else {
          currCountAndSay += (String(count) + currNumChar);
          currNumChar = char;
          count = 1;
      }
  }

  if (currNumChar !== '' && count !== 0) {
      currCountAndSay += (String(count) + currNumChar);
  }

  return currCountAndSay;
};