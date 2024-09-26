var reverseVowels = function(s) {
    // Tập hợp các nguyên âm
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    // Chuyển chuỗi thành mảng để dễ thay đổi giá trị
    let strArray = s.split('');
    
    // Dùng hai con trỏ, một ở đầu và một ở cuối chuỗi
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Di chuyển con trỏ trái nếu không phải nguyên âm
        while (left < right && !vowels.has(strArray[left])) {
            left++;
        }
        
        // Di chuyển con trỏ phải nếu không phải nguyên âm
        while (left < right && !vowels.has(strArray[right])) {
            right--;
        }
        
        // Hoán đổi hai nguyên âm
        if (left < right) {
            let temp = strArray[left];
            strArray[left] = strArray[right];
            strArray[right] = temp;
            left++;
            right--;
        }
    }
    
    // Kết quả là mảng sau khi hoán đổi nguyên âm, chuyển thành chuỗi
    return strArray.join('');
};