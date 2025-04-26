/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
  let count = 0;
  for (let i = 0, start = 0, minPointer = -1, maxPointer = -1; i < nums.length; i++) {
      if (nums[i] < minK || nums[i] > maxK) {
          minPointer = -1;
          maxPointer = -1;
          start = i + 1;
      }

      if (nums[i] === minK) minPointer = i;
      if (nums[i] === maxK) maxPointer = i;
      
      if (minPointer !== -1 && maxPointer !== -1) {
          count += (Math.min(minPointer, maxPointer) - start + 1);
      }
  }

  return count;
};