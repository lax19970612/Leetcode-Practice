/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const shiftNums = k % nums.length;
  if (shiftNums === 0) return;
  
  const shiftElements = nums.splice(nums.length - shiftNums);
  nums.splice(0, 0, ...shiftElements);
};