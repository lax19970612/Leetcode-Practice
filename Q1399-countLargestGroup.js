/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  const groupMap = {};
  let maxGroupSize = 0;
  const getGroupIndex = (num) => {
      const numToString = String(num);
      let groupIndex = 0;
      for (let i = 0; i < numToString.length; i++) {
          groupIndex += parseInt(numToString.charAt(i));
      }

      return groupIndex;
  };
  
  for (let i = 1; i <= n; i++) {
      const index = getGroupIndex(i);
      groupMap[index] = groupMap[index] === undefined ? 1 : groupMap[index] + 1;
      maxGroupSize = Math.max(maxGroupSize, groupMap[index]);
  }

  return Object.values(groupMap).filter((group) => group === maxGroupSize).length;
};