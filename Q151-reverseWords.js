/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let currWord = '';
    let ans = '';

    const reverse = (word) => {
        let output = '';
        for (let i = word.length - 1; i >= 0; i--) output += word.charAt(i);

        return output;
    };

    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) === ' ') {
            if (currWord !== '') {
                const reverseCurrWord = reverse(currWord);
                currWord = '';

                if (ans !== '') ans += ' ';
                ans += reverseCurrWord;
            }
        } else {
            currWord += s.charAt(i);
        }
    }

    if (currWord !== '') {
        if (ans !== '') ans += ' ';
        ans += reverse(currWord);
    }

    return ans;
};