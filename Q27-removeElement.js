/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let idx = 0;
  while (idx < nums.length) {
      if (nums[idx] === val) nums.splice(idx, 1);
      else idx++;
  }

  return nums.length;
};