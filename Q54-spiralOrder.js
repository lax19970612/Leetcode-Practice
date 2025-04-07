/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const rowNum = matrix.length;
  const colNum = matrix[0].length;

  const ans = [];
  const visited = [...Array(rowNum)].map(() => Array(colNum).fill(false));

  // define direction (right, down, left, up)
  const direction = [
      [0, 1], [1, 0], [0, -1], [-1, 0],
  ];

  const isValidMove = (curr, dir) => {
      const next = [curr[0] + dir[0], curr[1] + dir[1]];
      
      if (next[0] < 0 || next[0] >= rowNum) return false;
      if (next[1] < 0 || next[1] >= colNum) return false;
      
      return visited[next[0]][next[1]] === false;
  };

  let dirIdx = 0;
  let curr = [0, -1];   

  while(ans.length < rowNum * colNum) {
      let isValid = isValidMove(curr, direction[dirIdx]);
      if (isValid) {
          const dir = direction[dirIdx];
          curr = [curr[0] + dir[0], curr[1] + dir[1]];
          visited[curr[0]][curr[1]] = true;
          ans.push(matrix[curr[0]][curr[1]]);
      } else {
          dirIdx = (dirIdx + 1) % 4;
      }
  }


  return ans;
};