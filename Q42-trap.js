/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // water[i] = min(max(0 - i), max(i - end)) - height[i]
  const left = [];
  const right = [];
  let ans = 0;

  left[0] = height[0];
  for (let i = 1; i < height.length; i++) {
      left[i] = Math.max(left[i - 1], height[i]);
  }

  right[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
      right[i] = Math.max(right[i + 1], height[i]);
  }

  for (let i = 0; i < height.length; i++) {
      ans += (Math.min(left[i], right[i]) - height[i]);
  }

  return ans;
};