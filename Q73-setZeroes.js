/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const rowNeedOverlap = [...new Array(m)].fill(false);
    const colNeedOverlap = [...new Array(n)].fill(false);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rowNeedOverlap[i] = true;
                colNeedOverlap[j] = true;
            }
        }
    }

    for (let i = 0; i < rowNeedOverlap.length; i++) {
        if (rowNeedOverlap[i]) {
            for (let j = 0; j < n; j++) matrix[i][j] = 0;
        }
    }

    for (let i = 0; i < colNeedOverlap.length; i++) {
        if (colNeedOverlap[i]) {
            for (let j = 0; j < m; j++) matrix[j][i] = 0;
        }
    }
};