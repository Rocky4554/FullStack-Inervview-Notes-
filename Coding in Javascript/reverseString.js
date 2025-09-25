const originalString = "I am Raunak";

const reversedString = originalString
  .split(" ")      // 1. Splits the string into an array of words: ["I", "am", "Raunak"]
  .reverse()     // 2. Reverses the order of elements in the array: ["Raunak", "am", "I"]
  .join(" ");     // 3. Joins the array elements back into a string, separated by a space

console.log("the reversed String :",reversedString); // Output: "Raunak am I"