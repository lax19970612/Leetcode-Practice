/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let ans = [];
    let acc = 0;

    for (const num of nums) {
        acc = (acc * 2 + num) % 10;
        ans.push(acc % 5 === 0);
    }

    return ans;
};