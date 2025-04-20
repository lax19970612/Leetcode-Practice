/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  const map = {};

  for (let i = 0; i < answers.length; i++) {
      if (map[answers[i]] === undefined) {
          map[answers[i]] = 1;
      } else {
          map[answers[i]]++;
      }
  }

  const rabbitsNum = Object.entries(map)
      .reduce((acc, cur) => {
          const groupIdx = parseInt(cur[0], 10);
          const groupNum = cur[1];
          const groupCount = Math.ceil(groupNum / (groupIdx + 1));

          return acc + groupCount * (groupIdx + 1);
      }, 0);

  return rabbitsNum;
};