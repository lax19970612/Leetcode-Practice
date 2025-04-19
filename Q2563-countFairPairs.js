/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    // 0 <= i < j < n
    // just means that cannot choose the same element
    // don't need to consider which one index is lower

    nums.sort((a, b) => a - b);

    const countFairPairsWithUpper = (upperLimit) => {
        let pairCount = 0;
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const pairSum = nums[left] + nums[right];

            if (pairSum <= upperLimit) {
                pairCount += (right - left);
                left++;
            } else {
                right--;
            }
        }

        return pairCount;
    };
    
    const upperPairCount = countFairPairsWithUpper(upper);
    const lowerPairCount = countFairPairsWithUpper(lower - 1);

    return upperPairCount - lowerPairCount;
};