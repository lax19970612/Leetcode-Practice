/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const compareWord = strs[0];
  let ans = compareWord;
  let i;
  
  for (i = 0; i < compareWord.length; i++) {
      let findAns = false;
      for (let j = 1; j < strs.length; j++) {
          const toCompareWord = strs[j];

          if (compareWord.charAt(i) === '' || compareWord.charAt(i) !== toCompareWord.charAt(i)) {
              findAns = true;
              break;
          }
      }

      if (findAns) {
          ans = compareWord.substring(0, i);
          break;
      }
  }

  return ans;
};