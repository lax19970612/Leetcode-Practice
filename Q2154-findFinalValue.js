/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    const set = new Set(nums);
    
    let ans = original;
    while (set.has(ans)) {
        ans *= 2;
    }

    return ans;
};