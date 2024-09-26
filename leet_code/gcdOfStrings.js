const gcdOfStrings = function (str1, str2) {
    // If concatenating str1 + str2 is not equal to str2 + str1, return empty string
    if (str1 + str2 !== str2 + str1) return '';

    // Function to find GCD of two numbers
    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    // Find GCD of the lengths of the two strings
    let gcdLength = gcd(str1.length, str2.length);

    // The substring from 0 to gcdLength is the greatest common divisor of the strings
    return str1.substring(0, gcdLength);
};