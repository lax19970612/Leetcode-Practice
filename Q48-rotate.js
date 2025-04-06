/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const transpose = (matrix) => {
      const n = matrix.length
      for (let rowIdx = 0; rowIdx < n; rowIdx++) {
          for (let colIdx = rowIdx + 1; colIdx < n; colIdx++) {
              [matrix[rowIdx][colIdx], matrix[colIdx][rowIdx]] = [matrix[colIdx][rowIdx], matrix[rowIdx][colIdx]];
          }
      }
  };

  const reverseRow = (matrix) => {
      const n = matrix.length;
      const mid = Math.floor(n / 2);
      for (let rowIdx = 0; rowIdx < n; rowIdx++) {
          for (let colIdx = 0; colIdx < mid; colIdx++) {
              [matrix[rowIdx][colIdx], matrix[rowIdx][n - colIdx - 1]] = [matrix[rowIdx][n - colIdx - 1], matrix[rowIdx][colIdx]];
          }
      }
  };

  transpose(matrix);
  reverseRow(matrix);
};