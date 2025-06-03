/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    let maxCandy = 0;
    const boxStatus = [...status];
    const queue = initialBoxes.filter((box) => boxStatus[box] === 1);

    let iterator = 0;
    const innerBoxes = initialBoxes.filter((box) => boxStatus[box] === 0);
    while (iterator < queue.length) {
        const box = queue[iterator];
        const boxKeys = keys[box];
        
        containedBoxes[box].forEach((box) => innerBoxes.push(box));
        boxKeys.forEach((key) => boxStatus[key] = 1);

        innerBoxes.forEach((box, idx) => {
            if (boxStatus[box] === 1) {
                queue.push(box);
                innerBoxes.splice(idx, 1);
            }
        });
        maxCandy += candies[box];
        iterator++;
    }

    return maxCandy;
};