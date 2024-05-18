/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let idx = 0, existMap = {};
  while (idx < nums.length) {
      const element = nums[idx];
      if (existMap[element] !== undefined) {
          nums.splice(idx, 1);
      } else {
          existMap[element] = 1;
          idx++;
      }
  }

  return nums.length;
};


