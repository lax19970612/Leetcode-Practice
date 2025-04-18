/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer) {
      const value = numbers[leftPointer] + numbers[rightPointer];
      if (value === target) {
          return [leftPointer + 1, rightPointer + 1];
      } else {
          if (value < target) {
              leftPointer++;
          } else {
              rightPointer--;
          }
      }
  }
};