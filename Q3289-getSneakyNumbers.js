/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let map = {};
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map[num] === 1) {
            ans.push(num);
        } else {
            map[num] = 1;
        }
    }

    return ans;
};