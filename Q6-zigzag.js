/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;

  let array = [...new Array(numRows)].map(() => []);
  let ans = '';
  let arrayIdx = 0;
  let dir = 1;

  for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
      array[arrayIdx].push(char);
      arrayIdx += dir;

      if (arrayIdx === 0 || arrayIdx === numRows - 1) dir *= -1;
  }

  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
          ans += array[i][j];
      }
  }

  return ans;
};