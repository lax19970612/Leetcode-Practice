/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const mid = Math.floor(nums.length / 2);
  const sortedNums = nums.sort();

  return sortedNums[mid];
};
