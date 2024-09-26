function reverseWords(s) {
    s = s.trim();
    let array = s.split(' ');
    let reverseString = '';
    for (let index = array.length - 1; index >= 0; index--) {
        const element = array[index];
        if (element != '') {
            reverseString += `${element}`
            if (index != 0) reverseString += ' '
        }
    }
    return reverseString
};

reverseWords('the sky is blue')