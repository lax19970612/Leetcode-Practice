/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const paths = [...Array(m)].map(() => Array(n).fill(0));
  paths[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1;

  for (let i = 1; i < n; i++) {
      if (obstacleGrid[0][i] !== 1) {
          paths[0][i] += paths[0][i - 1];
      }
  }

  for (let i = 1; i < m; i++) {
      if (obstacleGrid[i][0] !== 1) {
          paths[i][0] += paths[i - 1][0];
      }
  }

  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          if (obstacleGrid[i][j] !== 1) {
              paths[i][j] += (paths[i - 1][j] + paths[i][j - 1]);
          }
      }
  }

  return paths[m - 1][n - 1];
};