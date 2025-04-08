/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let startIndex = 0;
  let tank = 0;
  let totalLeft = 0;

  for (let i = 0; i < gas.length; i++) {
      const left = gas[i] - cost[i];
      tank += left;

      if (tank < 0) {
          tank = 0;
          startIndex = i + 1;
      }

      totalLeft += left;
  }

  return totalLeft < 0 ? -1 : startIndex;
};