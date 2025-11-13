/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function(s) {
    let moveTime = 0;
    let oneCount = 0;
    let needMove = false;

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);

        if (char === '1') {
            if (needMove) {
                moveTime += oneCount;
            }
            oneCount++;
            needMove = false;
        } else {
            if (oneCount) needMove = true;
        }
    }

    if (needMove) {
        moveTime += oneCount;
    }


    return moveTime;  
};