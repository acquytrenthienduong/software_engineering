// function increasingTriplet(nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 // const element = array[k];
//                 if (nums[i] < nums[j] && nums[j] < nums[k]) return true;
//             }
//         }
//     }
//     return false
// }

function increasingTriplet(nums) {
    let first = null;
    let second = null;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        if (first === null || element <= first) {
            first = element;
        } else if (second === null || element <= second) {
            second = element;
        } else {
            // Nếu phần tử lớn hơn first và second, tức là đã tìm thấy bộ ba tăng dần
            return true;
        }
    }

    return false;  // Nếu không tìm thấy bộ ba nào
}


console.log(increasingTriplet([5,4,3,2,1]));
