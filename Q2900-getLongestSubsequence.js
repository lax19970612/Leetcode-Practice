/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    const ans = [];
    ans.push(words[0]);
    for (let i = 1, curGroup = groups[0]; i < groups.length; i++) {
        if (curGroup !== groups[i]) {
            curGroup = groups[i];
            ans.push(words[i]);
        }
    }

    return ans;
};