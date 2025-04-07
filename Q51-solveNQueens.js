/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const ans = [];

  // pos: [x, y]
  const checkPosIsValid = (curQueenPos, tarQueenPos) => {
      if (curQueenPos[0] === tarQueenPos[0]) return false; // same col
      if (curQueenPos[1] === tarQueenPos[1]) return false; // same row

      if (
          Math.abs(tarQueenPos[0] - curQueenPos[0]) === Math.abs(tarQueenPos[1] - curQueenPos[1])
      ) {
          return false; // slash
      }

      return true;
  };

  const setCharAt = (str, index, char) => {
      return str.substring(0, index) + char + str.substring(index + 1);
  };

  const transferToPuzzle = (queensPos) => {
      let puzzle = new Array(n);
      for (let i = 0; i < n; i++) {
          puzzle[i] = new Array(n).fill('.').join('');
      }

      queensPos.forEach((pos) => {
          puzzle[pos[0]] = setCharAt(puzzle[pos[0]], pos[1], 'Q');
      });

      return puzzle;
  };

  // pos: [x, y]
  const finder = (currQueensPos, targetPos) => {
      const isValid = currQueensPos.every((currPos) => checkPosIsValid(currPos, targetPos));
      if (isValid) {
          const newCurrQueensPos = [...currQueensPos, targetPos];
          if (newCurrQueensPos.length === n) {
              ans.push(transferToPuzzle(newCurrQueensPos));
          } else {
              for (let i = targetPos[0] * n + targetPos[1] + 1; i < n * n; i++) {
                  finder(newCurrQueensPos, [Math.floor(i / n), i % n]);
              }
          }
      }
  };

  for (let i = 0; i < n; i++) {
      finder([], [0, i % n]);
  }
  
  return ans;
};