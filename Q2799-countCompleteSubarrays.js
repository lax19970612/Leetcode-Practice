/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
  const uniqueNumsSet = new Set(nums);

  let subarrayNum = 0;
  for (let i = 0; i < nums.length; i++) {
      const subArraySet = new Set();
      for (let j = i; j < nums.length; j++) {
          subArraySet.add(nums[j]);

          if (subArraySet.size === uniqueNumsSet.size) {
              subarrayNum += (nums.length - j);
              break;
          }
      }
  }

  return subarrayNum;
};