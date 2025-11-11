/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const dp = [...new Array(m + 1)].map(() => new Array(n + 1).fill(0));

    const getZeroAndOneCount = (str) => (
        str.split('').reduce((acc, char) => {
            const idx = parseInt(char, 10);
            acc[idx]++;
            return acc;
        }, [0, 0])
    );

    for (const str of strs) {
        const [zeroNum, oneNum] = getZeroAndOneCount(str);

        for (let i = m; i >= zeroNum; i--) {
            for (let j = n; j >= oneNum; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);
            }
        } 
    }

    return dp[m][n];
};