/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    const operationMap = {
        '++X': 1,
        'X++': 1,
        '--X': -1,
        'X--': -1
    };

    let value = 0;
    for (let i = 0; i < operations.length; i++) {
        const operation = operations[i];
        value += operationMap[operation];
    }

    return value;
};