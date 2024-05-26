/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let targetIdx = nums.length - 1;

  for (let idx = nums.length - 2; idx >= 0; --idx) {
      const currCanGoMaxStep = nums[idx];
      if (idx + currCanGoMaxStep >= targetIdx) {
          // this pos can reach the target pos
          targetIdx = idx;
      }
  }

  return targetIdx === 0;
};