function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    for (let index = 0; index < flowerbed.length; index++) {
        if (flowerbed[index] === 0 && 
            (flowerbed[index - 1] === 0 || index === 0)
            && (i === flowerbed.length - 1 || flowerbed[index+1] === 0)
        ) {
            flowerbed[index] = 1;
            count++
        }
       
    }
    return count >= n
}

console.log(canPlaceFlowers([0,1,0], 1));
console.log(canPlaceFlowers([1,0,0,0,1], 2));

