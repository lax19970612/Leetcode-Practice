/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
  // 0 <= i < j < k < arr.length
  // Math.abs(arr[i] - arr[j]) <= a
  // Math.abs(arr[j] - arr[k]) <= b
  // Math.abs(arr[i] - arr[k]) <= c

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          for (let k = j + 1; k < arr.length; k++) {
              const ijDiff = Math.abs(arr[i] - arr[j]);
              const jkDiff = Math.abs(arr[j] - arr[k]);
              const ikDiff = Math.abs(arr[i] - arr[k]);

              if (ijDiff <= a && jkDiff <= b && ikDiff <= c) {
                  count++;
              }
          }
      }
  }

  return count;
};