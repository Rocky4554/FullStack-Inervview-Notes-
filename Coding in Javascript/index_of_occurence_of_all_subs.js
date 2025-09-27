const str = "The quick brown fox jumps over the lazy dog. The fox is quick.";
const substring = "fox";
const indices = []; // Array to store all found indices
let startIndex = 0; // Position to start the search from

// Loop as long as indexOf finds a match
while (startIndex < str.length) {
    // 1. Search for the substring starting from the current position
    let index = str.indexOf(substring, startIndex);//startindex means fromwhich position the cheking should start .

    // 2. If indexOf returns -1, the substring is not found in the remainder of the string
    if (index === -1) {
        break; 
    }

    // 3. If found, push the index to the results array
    indices.push(index);

    // 4. Update the startIndex to immediately after the found substring
    //    This ensures the next loop iteration starts right where the last match ended.
    startIndex = index + substring.length;
}

console.log(indices); // Output: [16, 44]