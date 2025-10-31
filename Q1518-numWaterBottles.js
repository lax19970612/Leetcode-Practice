/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let canDrink = 0;
    let fullWaterBottles = numBottles;
    let emptyWaterBottles = 0;
    while (fullWaterBottles > 0 || emptyWaterBottles >= numExchange) {
        canDrink += fullWaterBottles;
        
        emptyWaterBottles += fullWaterBottles;
        fullWaterBottles = Math.floor(emptyWaterBottles / numExchange);
        emptyWaterBottles = emptyWaterBottles % numExchange;
    }

    return canDrink;
};