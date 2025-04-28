/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let count = 0;
    for (let left = 0, right = 0, currSum = nums[0]; left < nums.length;) {
        if (currSum * (right - left + 1) < k) {
            currSum += nums[++right];
        } else {
            count += (right - left);
            currSum -= nums[left++];
        }
    }


    return count;
};