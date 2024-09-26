// function productExceptSelf(array) {
//     let results = [];

//     for (let i = 0; i < array.length; i++) {
//         // Lấy tất cả các phần tử ngoại trừ phần tử thứ i
//         let filterArr = array.slice(0, i).concat(array.slice(i + 1));
//         // Tính tích của các phần tử còn lại
//         results.push(filterArr.reduce((acc, current) => acc * current, 1));
//     }
//     console.log('results',results);
    
    
//     return results;
// }

function productExceptSelf(array) {
    console.log('array', array);
    
    const length = array.length;
    let results = new Array(length).fill(1);
    
    // Tính tích của các phần tử bên trái
    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        results[i] = leftProduct;
        leftProduct      *= array[i];
    }

    console.log('results', results);

    // rightProd = 1
    // result = [ 1, 1, 2, 6 ]

    // rightProd = 1 * 4 = 4
    // [ 1, 1, 8, 6]

    // rightProd = 1 * 4 * 3 = 12
    // [ 1, 12, 8, 6]

    // rightProd = 1 * 4 * 3 * 2 = 12
    // [ 24, 12, 8, 6]


    // Tính tích của các phần tử bên phải
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        results[i] *= rightProduct;
        rightProduct *= array[i];
    }

    console.log('results', results);

    
    return results;
}

productExceptSelf([1,2,3,4])