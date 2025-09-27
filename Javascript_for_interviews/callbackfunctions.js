// Example: Array processing with callbacks
function processNumbers(numbers, callback) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(callback(numbers[i]));
    }
    return result;
}

// Different callback functions
function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

// Usage
const numbers = [1, 2, 3, 4, 5];
const doubled = processNumbers(numbers, double);    // [2, 4, 6, 8, 10]
const squared = processNumbers(numbers, square);    // [1, 4, 9, 16, 25]

// Or with anonymous functions
const tripled = processNumbers(numbers, function(x) {
    return x * 3;
});  // [3, 6, 9, 12, 15]