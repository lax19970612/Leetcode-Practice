/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = [];
    s.split(' ').forEach((word) => {
        if (word !== '') words.unshift(word);
    });

    return words.join(' ');
};