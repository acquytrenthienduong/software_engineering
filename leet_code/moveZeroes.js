function moveZeroes(nums) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            let temp = nums[i];
            nums[i] = nums[k];
            nums[k] = temp
            k++
        }
    }
}

moveZeroes([0, 1, 0, 3, 12])