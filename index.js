function calculateTax(amount) {
    return amount * 0.1;
}

function convertToUpperCase(text){
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    return Math.max(num1, num2)
}

function isPalindrome(word){
    const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    if ( cleanedWord == reversedWord) {
        return true;
    }
    else;    
        return false;
}

function calculateDiscountedPrice(originalPrice, discountpercentage) {
    return originalPrice - (originalPrice * (discountpercentage / 100));
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };