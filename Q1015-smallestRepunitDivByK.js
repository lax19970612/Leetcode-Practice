/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    let reminder = 0;
    for (let n = 1; n < k + 1; n++) {
        reminder = (reminder * 10 + 1) % k;

        if (reminder === 0) {
            return n;
        }
    }

    return -1;
};