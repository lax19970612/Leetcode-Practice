/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let ans = 0;
    let n = colors.length;

    for (let i = 0; i < n; i++) {
        let maximum = neededTime[i];
        let sum = maximum;
        for (let j = i + 1; j < n; j++) {
            if (colors[i] === colors[j]) {
                sum += neededTime[j];
                maximum = Math.max(maximum, neededTime[j]);

                if (j === n - 1) i = j;
            } else {
                i = j - 1;
                break;
            }
        }
        ans += (sum - maximum);
    }

    return ans;
};