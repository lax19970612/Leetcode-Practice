/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let ans = 2;
    while (n / 2 >= 1) {
        n = Math.floor(n / 2);
        ans *= 2;
    }

    return ans - 1;
};