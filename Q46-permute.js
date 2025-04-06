/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const length = nums.length;
    const ans = [];

    const arrange = (tempArr, restArr) => {
        if (tempArr.length === length) {
            ans.push(tempArr);
        } else {
            restArr.forEach((item, idx) => {
                const newRest = [...restArr];
                newRest.splice(idx, 1);
                arrange([...tempArr, item], newRest);
            });
        }
    };

    arrange([], nums);
    return ans;
};