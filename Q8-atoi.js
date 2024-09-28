/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const input = s.trim();
  const isNegative = input.charCodeAt(0) === 45; // -
  let value = 0;
  let i = input.charCodeAt(0) === 43 || input.charCodeAt(0) === 45 ? 1 : 0; // + or -
  for (i; i < input.length; i++) {
      if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57) { // 0-9
          value = value * 10 + (input.charCodeAt(i) - 48);
      }
      else break;
  }

  if (isNegative) return Math.max(-value, -(2 ** 31));
  return Math.min(value, 2 ** 31 - 1);
};