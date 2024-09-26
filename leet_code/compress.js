function compress(chars) {
    let compressChar = []
    for (let i = 0; i < chars.length; i++) {
        let count = 1;
        let hasPush = false;
        const element = chars[i];
        if (!compressChar.includes(element)) {
            compressChar.push(element)
            hasPush = true;
        }
        for (let j = i + 1; j < chars.length; j++) {
            const element2 = chars[j];
            if (element === element2) count++
        }
        if (count >= 2) {
            if (hasPush) {
                let arr = count.toString().split('')
                for (let k = 0; k < arr.length; k++) {
                    compressChar.push(arr[k])
                }
            }
            hasPush = false;
            count = 1
        };
    }
    // console.log('chars',chars);
    // console.log('compressChar',compressChar);
    
    return compressChar.length;
};

console.log(compress(["a","a","b","b","c","c","c"]));
