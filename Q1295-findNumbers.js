/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  return nums.filter((num) => {
      const numOfDigit = Math.floor(Math.log10(num)) + 1;
      return numOfDigit % 2 === 0;
  }).length;
};