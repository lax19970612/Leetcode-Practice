/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
    let count = 0;
    let total = nums.reduce((acc, cur) => acc + cur, 0);
    let leftSum = 0;
    let rightSum = total;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (leftSum === rightSum) count += 2;
            else if (leftSum === rightSum - 1) count++;
            else if (leftSum === rightSum + 1) count++;
        } else {
            leftSum += nums[i];
            rightSum -= nums[i];
        }
    }

    return count;
};