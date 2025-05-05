/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
  const mod = 1e9 + 7;
  let dp = [1, 1, 2, 5];
  for (let i = 3; i <= n; i++) {
      dp[i] = (2 * dp[i - 1] + dp[i - 3]) % mod;
  }

  return dp[n];
};