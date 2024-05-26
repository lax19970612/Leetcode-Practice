/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0, minValue = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; ++i) {
      const price = prices[i];

      if (price < minValue) {
          minValue = price;
      } else if (price - minValue > maxProfit) {
          maxProfit = price - minValue;
      }
  }

  return maxProfit;
};