/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};
    strs.forEach((str) => {
        const key = str.split('').sort().join('');
        if (!map[key]) map[key] = [str];
        else map[key].push(str);
    });


    return Object.values(map);
};