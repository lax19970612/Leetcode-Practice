/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  let count = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) max = Math.max(max, nums[i]);
  for (let left = 0, right = 0, maxCount = nums[0] === max ? 1 : 0;
      left < nums.length && right < nums.length;
  ) {
      if (maxCount === k) {
          count += (nums.length - right);
          if (nums[left++] === max) maxCount--;
      } else {
          if (nums[++right] === max) maxCount++;
      }
  }

  return count;
};