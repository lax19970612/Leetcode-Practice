/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    const n = bits.length;
    let idx = 0;

    while (idx < n - 1) {
        idx += (bits[idx] === 1 ? 2 : 1);
    }

    return idx === n - 1;
};