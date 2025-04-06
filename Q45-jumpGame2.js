/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  const minJumpsToEnd = new Array(nums.length).fill(Infinity);
  minJumpsToEnd[nums.length - 1] = 0;

  for (let i = nums.length - 2; i >= 0; i--) {
      const path = nums[i];
      minJumpsToEnd[i] = 1 + Math.min(...minJumpsToEnd.slice(i, i + path + 1));
  }

  return minJumpsToEnd[0];
};