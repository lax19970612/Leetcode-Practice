/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {    
    const n = nums.length;
    const ans = [];

    const find = (subarray) => {
        const occur = new Map();
        subarray.forEach((item) => {
            occur.set(item, (occur.get(item) || 0) + 1);
        });

        const topX = Array.from(occur.entries()).sort((a, b) => {
            if (a[1] === b[1]) return b[0] - a[0];
            return b[1] - a[1];
        })
        .slice(0, x)
        .map((entry) => entry[0]);

        const sum = subarray.reduce((acc, cur) => {
            if (topX.includes(cur)) {
                acc += cur;
            }

            return acc;
        }, 0);

        return sum;
    };

    if (n < k) {
        ans.push(find(nums));
    } else {
        for (let i = 0; i <= n - k; i++) {
            const subarray = nums.slice(i, i + k);
            ans.push(find(subarray));
        }
    }
    return ans;
};