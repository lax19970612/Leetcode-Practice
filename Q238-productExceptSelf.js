/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const ans = [];

  let currProduct = 1;
  for (let i = 0; i < nums.length; i++) {
      ans[i] = currProduct;
      currProduct *= nums[i];
  }
  currProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
      ans[i] *= currProduct;
      currProduct *= nums[i];
  }

  return ans;
};