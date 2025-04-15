/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
  const quesNum = questions.length;
  const dp = new Array(quesNum + 1).fill(0);

  for (let i = quesNum - 1; i >= 0; i--) {
      const nextCanSolve = i + questions[i][1] + 1;
      dp[i] = Math.max(dp[i + 1], questions[i][0] + dp[Math.min(nextCanSolve, quesNum)]);
  }

  return dp[0];
};