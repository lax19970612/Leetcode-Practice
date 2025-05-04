/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  const n = dominoes.length;
  const seen = {};

  let pairs = 0;
  for (let i = 0; i < n; i++) {
      const domino = dominoes[i];
      const mapKey = domino[0] < domino[1]
          ? `${domino[0]}${domino[1]}`
          : `${domino[1]}${domino[0]}`

      if (seen[mapKey] === undefined) seen[mapKey] = 1;
      else {
          pairs += seen[mapKey];
          seen[mapKey] += 1;
      }
  }

  return pairs;
};