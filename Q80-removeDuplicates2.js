/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0, numAppearMap = {};
  while (i < nums.length) {
      const value = nums[i];

      if (numAppearMap[value] !== undefined && numAppearMap[value] >= 2) {
          nums.splice(i, 1);
      } else {
          numAppearMap[value] = (numAppearMap[value] || 0) + 1;
          i++;
      }
  }

  return nums.length;
};