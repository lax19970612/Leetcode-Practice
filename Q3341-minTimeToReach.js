/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {
  const n = moveTime.length;
  const m = moveTime[0].length;

  const dist = [...new Array(n)].map(() => new Array(m).fill(Infinity));
  dist[0][0] = 0;

  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  const dfs = (x, y, currentTime) => {
      if (x === n - 1 && y === m - 1) return;
      for (let i = 0; i < dirs.length; i++) {
          const dir = dirs[i];
          const nextX = x + dir[0];
          const nextY = y + dir[1];

          if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m) {
              const time = currentTime + 1 + Math.max(0, (moveTime[nextX][nextY] - currentTime));
              if (time < dist[nextX][nextY]) {
                  dist[nextX][nextY] = time;
                  dfs(nextX, nextY, time);
              }
          }
      }
  };

  dfs(0, 0, 0);
  return dist[n - 1][m - 1];
};