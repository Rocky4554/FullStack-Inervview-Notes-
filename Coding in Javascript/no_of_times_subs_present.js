const str = "An apple and a banana.";
const substring = "an";

// 1. Split the string by the substring.
// This gives an array where the substring instances acted as the delimiters.
const parts = str.split(substring);

// 2. The number of occurrences is always the number of parts minus 1.
const count = parts.length - 1;

console.log(parts); // Output (Case-Sensitive): ['An apple ', 'd a b', 'a.'] 
console.log(count); // Output: 2