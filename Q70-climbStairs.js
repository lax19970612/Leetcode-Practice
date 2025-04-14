/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const steps = [1, 2];
  for (let i = 2; i < n; i++) {
      steps.push(steps[i - 1] + steps[i - 2]);
  }

  return steps[n - 1];
};