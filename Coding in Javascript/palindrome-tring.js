const str = "madam";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

if (str === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not a palindrome");
}

// two pointer approach
const str = "madam";
let left = 0;
let right = str.length - 1;
let isPalindrome = true;

while (left < right) {
  if (str[left] !== str[right]) {
    isPalindrome = false;
    break;
  }
  left++;
  right--;
}

if (isPalindrome) {
  console.log("Palindrome");
} else {
  console.log("Not a palindrome");
}


