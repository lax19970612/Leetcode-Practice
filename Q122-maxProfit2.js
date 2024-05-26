/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minValue = Number.MAX_VALUE;
  let maxTotalProfit = 0, maxCurrProfit = 0;


  for (let i = 0; i < prices.length; ++i) {
      const price = prices[i];

      if (price - minValue > maxCurrProfit) {
          maxCurrProfit = price - minValue;
      } else {
          maxTotalProfit += maxCurrProfit;
          maxCurrProfit = 0;
          minValue = price;
      }
  }

  maxTotalProfit += maxCurrProfit;

  return maxTotalProfit;
};