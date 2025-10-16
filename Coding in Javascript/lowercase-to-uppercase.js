const str = "HeLLo";
let result = "";

for (let i = 0; i < str.length; i++) {
  let code = str.charCodeAt(i);

  // A–Z → 65–90, a–z → 97–122
  if (code >= 65 && code <= 90) {
    // Uppercase → lowercase
    result += String.fromCharCode(code + 32);
  } else if (code >= 97 && code <= 122) {
    // Lowercase → uppercase
    result += String.fromCharCode(code - 32);
  } else {
    // Non-alphabetic characters remain same
    result += str[i];
  }
}

console.log(result);
