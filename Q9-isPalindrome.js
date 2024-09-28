/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const numberString = x.toString();
  let result = true;
  for (let begin = 0, end = numberString.length - 1; begin < end; begin++, end--) {
      if (numberString.charAt(begin) !== numberString.charAt(end)) {
          result = false;
          break;
      }
  }

  return result;
};