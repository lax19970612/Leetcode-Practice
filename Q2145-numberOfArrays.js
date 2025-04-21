/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
  const hiddens = new Array(differences.length + 1);
  hiddens[0] = 0;

  let min = 0;
  let max = 0;
  for (let i = 0; i < differences.length; i++) {
      hiddens[i + 1] = hiddens[i] + differences[i];
      min = Math.min(hiddens[i + 1], min);
      max = Math.max(hiddens[i + 1], max);
  }

  const minMaxHiddneValue = max + (lower - min);
  if (minMaxHiddneValue <= upper) {
      return upper - minMaxHiddneValue + 1;
  }

  return 0;
};