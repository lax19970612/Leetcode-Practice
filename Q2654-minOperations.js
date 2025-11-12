/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;

    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    };

    let oneNum = nums.reduce((acc, cur) => {
        acc += cur === 1 ? 1 : 0;
        return acc;
    }, 0);

    if (oneNum > 0) {
        return n - oneNum;
    }

    let g = nums[0];
    for (let i = 1; i < n; i++) {
        g = gcd(g, nums[i]);
    }

    if (g > 1) return -1;

    let subarrayLength = Infinity;
    for (let i = 0; i < n; i++) {
        let g = nums[i];
        for (let j = i + 1; j < n; j++) {
            g = gcd(g, nums[j]);
            if (g === 1) {
                subarrayLength = Math.min(subarrayLength, j - i + 1);
                break;
            }
        }
    }

    return (subarrayLength - 1) + n - 1;
};