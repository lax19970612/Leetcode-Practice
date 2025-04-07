/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let ans = 0;

  // pos: [y, x]
  const checkPosIsValid = (curQueenPos, tarQueenPos) => {
      if (curQueenPos[0] === tarQueenPos[0]) return false; // same row
      if (curQueenPos[1] === tarQueenPos[1]) return false; // same col

      if (
          Math.abs(tarQueenPos[0] - curQueenPos[0]) === Math.abs(tarQueenPos[1] - curQueenPos[1])
      ) {
          return false; // slash
      }

      return true;
  };

  // pos: [y, x]
  const finder = (currQueensPos, targetPos) => {
      const isValid = currQueensPos.every((currPos) => checkPosIsValid(currPos, targetPos));
      if (isValid) {
          const newCurrQueensPos = [...currQueensPos, targetPos];
          if (newCurrQueensPos.length === n) {
              ans++;
          } else {
              // directly find next row
              for (let i = 0; i < n; i++) {
                  finder(newCurrQueensPos, [targetPos[0] + 1, i]);
              }
          }
      }
  };

  for (let i = 0; i < n; i++) {
      finder([], [0, i]);
  }

  return ans;
};