/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let num = 0;
    for (let m = 0; m < mat.length; m++) {
        for (let n = 0; n < mat[m].length; n++) {
            if (mat[m][n] === 1) {
                num += (checkIsSpecialPosition(m, n, mat) ? 1 : 0);
            }
        }
    }

    return num;
};

var checkIsSpecialPosition = function(row, col, mat) {
    for (let m = 0; m < mat.length; m++) {
        if (m === row) continue;
        else if (mat[m][col] === 1) return false;
    }

    for (let n = 0; n < mat[0].length; n++) {
        if (n === col) continue;
        else if (mat[row][n] === 1) return false;
    }

    return true;
}