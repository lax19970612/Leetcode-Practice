/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
  let count = 0;
  for (let i = 1; i < nums.length - 1; i++) {
      if (nums[i] === (nums[i - 1] + nums[i + 1]) * 2) count++;
  }

  return count;
};