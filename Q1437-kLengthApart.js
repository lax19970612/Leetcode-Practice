/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let prev = null;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (prev !== null && (i - prev - 1) < k) {
                return false;
            } else {
                prev = i;
            }
        }
    }

    return true;
};