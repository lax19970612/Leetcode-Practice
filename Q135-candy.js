/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const givingCandies = new Array(ratings.length).fill(1);

  // check left child rating
  for (let i = 1; i < ratings.length; i++) {
      if (ratings[i] > ratings[i - 1] && givingCandies[i] <= givingCandies[i - 1]) {
          givingCandies[i] = givingCandies[i - 1] + 1;
      }
  }

  // check right child rating
  for (let i = ratings.length - 2; i >= 0; i--) {
      if (ratings[i] > ratings[i + 1] && givingCandies[i] <= givingCandies[i + 1]) {
          givingCandies[i] = givingCandies[i + 1] + 1;
      }
  }

  return givingCandies.reduce((acc, cur) => acc + cur, 0);
};