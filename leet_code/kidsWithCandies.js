
var kidsWithCandies = function (candies, extraCandies) {
    var result = [];
    const max = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
        if ((candies[i] + extraCandies) >= max) {
            result.push(true)
        }
        else {
            result.push(false)
        }
    };
    return result;
}