/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const dp = new Array(nums.length);
  let ans = nums[0];
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
      dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
      ans = Math.max(ans, dp[i]);
  }

  return ans;
};