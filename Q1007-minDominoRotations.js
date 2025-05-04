/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */

var minDominoRotations = function(tops, bottoms) {
  let minRotate = Infinity;

  for (let dice = 1; dice < 7; dice++) {
      let topMove = 0, botMove = 0;
      for (let i = 0; i < tops.length; i++) {
          if (tops[i] === dice && bottoms[i] !== dice) botMove++;
          if (tops[i] !== dice && bottoms[i] === dice) topMove++;
          if (tops[i] !== dice && bottoms[i] !== dice) break;


          if (i === tops.length - 1) {
              minRotate = Math.min(minRotate, topMove);
              minRotate = Math.min(minRotate, botMove);
          }
      }
  }

  return minRotate === Infinity ? -1 : minRotate;

};