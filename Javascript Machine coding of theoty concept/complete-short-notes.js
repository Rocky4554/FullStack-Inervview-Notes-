# JavaScript Machine Coding Questions
## Complete Guide for Interview Preparation

---

## TABLE OF CONTENTS
1. [DOM Manipulation](#dom-manipulation)
2. [Array Operations](#array-operations)
3. [String Operations](#string-operations)
4. [Form Validation](#form-validation)
5. [AJAX & API Calls](#ajax-api)
6. [Event Handling](#event-handling)
7. [Timers & Intervals](#timers)
8. [Object & JSON Operations](#objects)
9. [Mini Projects](#mini-projects)
10. [Algorithm Questions](#algorithms)

---

## 1. DOM MANIPULATION {#dom-manipulation}

### **Q1: Toggle Element Visibility**
```javascript
// HTML: <button id="toggleBtn">Toggle</button>
//       <div id="content">Hello World</div>

document.getElementById('toggleBtn').addEventListener('click', function() {
  const content = document.getElementById('content');
  if (content.style.display === 'none') {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
});

// Alternative using classList
function toggleContent() {
  document.getElementById('content').classList.toggle('hidden');
}
// CSS: .hidden { display: none; }
```

### **Q2: Change Background Color**
```javascript
// Random color generator
document.getElementById('colorBtn').addEventListener('click', function() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// Predefined colors
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
let index = 0;

document.getElementById('colorBtn').addEventListener('click', function() {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
});
```

### **Q3: Add/Remove Elements Dynamically**
```javascript
// Add new list item
function addItem() {
  const newItem = document.createElement('li');
  newItem.textContent = 'New Item';
  document.getElementById('myList').appendChild(newItem);
}

// Remove last item
function removeLastItem() {
  const list = document.getElementById('myList');
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  }
}

// Remove specific item
function removeItem(element) {
  element.parentNode.removeChild(element);
}
```

### **Q4: Get and Set Input Values**
```javascript
// Get input value
function getInputValue() {
  const value = document.getElementById('myInput').value;
  console.log(value);
}

// Set input value
function setInputValue() {
  document.getElementById('myInput').value = 'New Value';
}

// Clear input
function clearInput() {
  document.getElementById('myInput').value = '';
}
```

### **Q5: Show/Hide Password**
```javascript
function togglePassword() {
  const passwordField = document.getElementById('password');
  const toggleBtn = document.getElementById('toggleBtn');
  
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    toggleBtn.textContent = 'Hide';
  } else {
    passwordField.type = 'password';
    toggleBtn.textContent = 'Show';
  }
}
```

---

## 2. ARRAY OPERATIONS {#array-operations}

### **Q1: Find Duplicates in Array**
```javascript
function findDuplicates(arr) {
  const duplicates = [];
  const seen = {};
  
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      if (!duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    } else {
      seen[arr[i]] = true;
    }
  }
  
  return duplicates;
}

// Example: findDuplicates([1, 2, 3, 2, 4, 3, 5]) → [2, 3]
```

### **Q2: Remove Duplicates from Array**
```javascript
// Method 1: Using Set
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Method 2: Traditional way
function removeDuplicates2(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

// Example: removeDuplicates([1, 2, 2, 3, 4, 4, 5]) → [1, 2, 3, 4, 5]
```

### **Q3: Find Largest/Smallest Number**
```javascript
// Find largest
function findLargest(arr) {
  return Math.max(...arr);
}

// Manual method
function findLargestManual(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Find smallest
function findSmallest(arr) {
  return Math.min(...arr);
}
```

### **Q4: Sum of Array Elements**
```javascript
// Method 1: Using reduce
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Method 2: Loop
function sumArrayLoop(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example: sumArray([1, 2, 3, 4, 5]) → 15
```

### **Q5: Sort Array**
```javascript
// Ascending order
const arr = [5, 2, 8, 1, 9];
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 5, 8, 9]

// Descending order
arr.sort((a, b) => b - a);
console.log(arr); // [9, 8, 5, 2, 1]

// Sort strings alphabetically
const names = ['John', 'Alice', 'Bob'];
names.sort();
console.log(names); // ['Alice', 'Bob', 'John']
```

### **Q6: Find Second Largest Number**
```javascript
function findSecondLargest(arr) {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1];
}

// Alternative method
function findSecondLargest2(arr) {
  let first = -Infinity;
  let second = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }
  
  return second;
}

// Example: findSecondLargest([5, 2, 8, 1, 9]) → 8
```

### **Q7: Reverse an Array**
```javascript
// Method 1: Built-in reverse
function reverseArray(arr) {
  return arr.reverse();
}

// Method 2: Manual
function reverseArrayManual(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// Example: reverseArray([1, 2, 3, 4]) → [4, 3, 2, 1]
```

### **Q8: Flatten Nested Array**
```javascript
// Method 1: Using flat()
function flattenArray(arr) {
  return arr.flat(Infinity);
}

// Method 2: Recursive
function flattenRecursive(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenRecursive(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// Example: flattenArray([1, [2, 3], [4, [5, 6]]]) → [1, 2, 3, 4, 5, 6]
```

---

## 3. STRING OPERATIONS {#string-operations}

### **Q1: Reverse a String**
```javascript
// Method 1: Using built-in methods
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Method 2: Manual loop
function reverseStringManual(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Example: reverseString("hello") → "olleh"
```

### **Q2: Check if String is Palindrome**
```javascript
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Manual method
function isPalindromeManual(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

// Example: isPalindrome("A man a plan a canal Panama") → true
```

### **Q3: Count Vowels in String**
```javascript
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

// Using regex
function countVowelsRegex(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// Example: countVowels("hello world") → 3
```

### **Q4: Capitalize First Letter of Each Word**
```javascript
function capitalizeWords(str) {
  return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Example: capitalizeWords("hello world") → "Hello World"
```

### **Q5: Find Longest Word in String**
```javascript
function findLongestWord(str) {
  const words = str.split(' ');
  let longest = '';
  
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  
  return longest;
}

// Example: findLongestWord("The quick brown fox") → "quick"
```

### **Q6: Count Character Occurrences**
```javascript
function countCharOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }
  return count;
}

// Count all characters
function countAllChars(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

// Example: countCharOccurrences("hello", "l") → 2
```

### **Q7: Remove Whitespace from String**
```javascript
// Remove all whitespace
function removeAllWhitespace(str) {
  return str.replace(/\s/g, '');
}

// Trim whitespace from start and end
function trimWhitespace(str) {
  return str.trim();
}

// Remove extra spaces (leave single space)
function removeExtraSpaces(str) {
  return str.replace(/\s+/g, ' ').trim();
}

// Example: removeAllWhitespace("hello   world") → "helloworld"
```

### **Q8: Check if Two Strings are Anagrams**
```javascript
function areAnagrams(str1, str2) {
  const clean1 = str1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  const clean2 = str2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  return clean1 === clean2;
}

// Example: areAnagrams("listen", "silent") → true
```

---

## 4. FORM VALIDATION {#form-validation}

### **Q1: Email Validation**
```javascript
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// More strict validation
function validateEmailStrict(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

// Example usage
const email = "test@example.com";
if (validateEmail(email)) {
  console.log("Valid email");
} else {
  console.log("Invalid email");
}
```

### **Q2: Password Validation**
```javascript
function validatePassword(password) {
  // At least 8 characters, one uppercase, one lowercase, one number
  const minLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  
  return minLength && hasUpper && hasLower && hasNumber;
}

// Detailed validation with messages
function validatePasswordDetailed(password) {
  const errors = [];
  
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain an uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain a lowercase letter");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain a number");
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
}
```

### **Q3: Phone Number Validation**
```javascript
function validatePhone(phone) {
  // Indian phone number (10 digits)
  const phonePattern = /^[6-9]\d{9}$/;
  return phonePattern.test(phone);
}

// International format
function validatePhoneInternational(phone) {
  const phonePattern = /^\+?[1-9]\d{1,14}$/;
  return phonePattern.test(phone);
}
```

### **Q4: Complete Form Validation**
```javascript
function validateForm(formData) {
  const errors = {};
  
  // Name validation
  if (!formData.name || formData.name.trim() === '') {
    errors.name = 'Name is required';
  } else if (formData.name.length < 3) {
    errors.name = 'Name must be at least 3 characters';
  }
  
  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!emailPattern.test(formData.email)) {
    errors.email = 'Invalid email format';
  }
  
  // Password validation
  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  
  // Confirm password
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors: errors
  };
}

// Usage
const formData = {
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123',
  confirmPassword: 'password123'
};

const result = validateForm(formData);
if (result.isValid) {
  console.log('Form is valid');
} else {
  console.log('Validation errors:', result.errors);
}
```

### **Q5: Real-time Input Validation**
```javascript
// Show error message while typing
document.getElementById('email').addEventListener('input', function(e) {
  const email = e.target.value;
  const errorDiv = document.getElementById('emailError');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (email && !emailPattern.test(email)) {
    errorDiv.textContent = 'Invalid email format';
    errorDiv.style.display = 'block';
  } else {
    errorDiv.style.display = 'none';
  }
});

// Password strength indicator
document.getElementById('password').addEventListener('input', function(e) {
  const password = e.target.value;
  const strengthDiv = document.getElementById('strengthIndicator');
  let strength = 'Weak';
  
  if (password.length >= 8 && /[A-Z]/.test(password) && 
      /[a-z]/.test(password) && /[0-9]/.test(password)) {
    strength = 'Strong';
  } else if (password.length >= 6) {
    strength = 'Medium';
  }
  
  strengthDiv.textContent = `Strength: ${strength}`;
});
```

---

## 5. AJAX & API CALLS {#ajax-api}

### **Q1: Fetch Data with GET Request**
```javascript
// Modern fetch API
function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      displayUsers(data);
    })
    .catch(error => console.error('Error:', error));
}

function displayUsers(users) {
  const userList = document.getElementById('userList');
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    userList.appendChild(li);
  });
}
```

### **Q2: POST Request (Create Data)**
```javascript
function createUser(userData) {
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    alert('User created successfully!');
  })
  .catch(error => console.error('Error:', error));
}

// Usage
const newUser = {
  name: 'John Doe',
  email: 'john@example.com'
};
createUser(newUser);
```

### **Q3: PUT Request (Update Data)**
```javascript
function updateUser(userId, userData) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Updated:', data);
  })
  .catch(error => console.error('Error:', error));
}
```

### **Q4: DELETE Request**
```javascript
function deleteUser(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      console.log('User deleted successfully');
    }
  })
  .catch(error => console.error('Error:', error));
}
```

### **Q5: jQuery AJAX**
```javascript
// GET request
$.ajax({
  url: 'https://api.example.com/users',
  type: 'GET',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  },
  error: function(error) {
    console.log('Error:', error);
  }
});

// POST request
$.ajax({
  url: 'https://api.example.com/users',
  type: 'POST',
  contentType: 'application/json',
  data: JSON.stringify({
    name: 'John',
    email: 'john@example.com'
  }),
  success: function(response) {
    console.log('Success:', response);
  },
  error: function(error) {
    console.log('Error:', error);
  }
});

// Shorthand methods
$.get('url', function(data) {
  console.log(data);
});

$.post('url', {name: 'John'}, function(response) {
  console.log(response);
});
```

### **Q6: Async/Await with Fetch**
```javascript
async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// POST with async/await
async function createUser(userData) {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### **Q7: Handle Loading State**
```javascript
function fetchDataWithLoading() {
  const loadingDiv = document.getElementById('loading');
  const contentDiv = document.getElementById('content');
  
  loadingDiv.style.display = 'block';
  contentDiv.style.display = 'none';
  
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      loadingDiv.style.display = 'none';
      contentDiv.style.display = 'block';
      contentDiv.innerHTML = JSON.stringify(data);
    })
    .catch(error => {
      loadingDiv.style.display = 'none';
      contentDiv.innerHTML = 'Error loading data';
    });
}
```

---

## 6. EVENT HANDLING {#event-handling}

### **Q1: Button Click Event**
```javascript
// Method 1: addEventListener
document.getElementById('myButton').addEventListener('click', function() {
  alert('Button clicked!');
});

// Method 2: onclick property
document.getElementById('myButton').onclick = function() {
  alert('Button clicked!');
};

// Method 3: Inline onclick (not recommended)
// <button onclick="handleClick()">Click Me</button>
function handleClick() {
  alert('Button clicked!');
}
```

### **Q2: Counter Application**
```javascript
let count = 0;

document.getElementById('increment').addEventListener('click', function() {
  count++;
  document.getElementById('display').textContent = count;
});

document.getElementById('decrement').addEventListener('click', function() {
  count--;
  document.getElementById('display').textContent = count;
});

document.getElementById('reset').addEventListener('click', function() {
  count = 0;
  document.getElementById('display').textContent = count;
});
```

### **Q3: Form Submit Event**
```javascript
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  console.log('Name:', name);
  console.log('Email:', email);
  
  // Process form data
  // Send to API, etc.
});
```

### **Q4: Input Change Event**
```javascript
// Listen for changes
document.getElementById('myInput').addEventListener('change', function(e) {
  console.log('Changed to:', e.target.value);
});

// Listen while typing (input event)
document.getElementById('myInput').addEventListener('input', function(e) {
  console.log('Current value:', e.target.value);
});
```

### **Q5: Mouse Events**
```javascript
const box = document.getElementById('box');

// Mouse enter
box.addEventListener('mouseenter', function() {
  this.style.backgroundColor = 'blue';
});

// Mouse leave
box.addEventListener('mouseleave', function() {
  this.style.backgroundColor = 'red';
});

// Mouse move
box.addEventListener('mousemove', function(e) {
  console.log('X:', e.clientX, 'Y:', e.clientY);
});

// Double click
box.addEventListener('dblclick', function() {
  alert('Double clicked!');
});
```

### **Q6: Keyboard Events**
```javascript
// Key press
document.addEventListener('keypress', function(e) {
  console.log('Key pressed:', e.key);
});

// Key down
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    console.log('Enter key pressed');
  }
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    console.log('Ctrl+S pressed');
  }
});

// Specific input field
document.getElementById('myInput').addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
    console.log('Enter pressed in input');
  }
});
```

### **Q7: Event Delegation**
```javascript
// Instead of adding event to each item, add to parent
document.getElementById('parentList').addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('Clicked on:', e.target.textContent);
    e.target.style.backgroundColor = 'yellow';
  }
});

// Works for dynamically added items too
function addNewItem() {
  const li = document.createElement('li');
  li.textContent = 'New Item';
  document.getElementById('parentList').appendChild(li);
}
```

---

## 7. TIMERS & INTERVALS {#timers}

### **Q1: Simple Countdown Timer**
```javascript
function startCountdown(seconds) {
  const display = document.getElementById('timer');
  let timeLeft = seconds;
  
  const interval = setInterval(function() {
    display.textContent = timeLeft;
    timeLeft--;
    
    if (timeLeft < 0) {
      clearInterval(interval);
      display.textContent = "Time's up!";
    }
  }, 1000);
}

// Usage: startCountdown(10);
```

### **Q2: Digital Clock**
```javascript
function displayClock() {
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
  }
  
  updateTime(); // Initial call
  setInterval(updateTime, 1000);
}

// Call when page loads
displayClock();
```

### **Q3: Stopwatch**
```javascript
let stopwatchInterval;
let seconds = 0;

function startStopwatch() {
  stopwatchInterval = setInterval(function() {
    seconds++;
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    const timeString = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.getElementById('stopwatch').textContent = timeString;
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  seconds = 0;
  document.getElementById('stopwatch').textContent = '00:00:00';
}
```

### **Q4: Delayed Execution**
```javascript
// Execute after delay
function delayedMessage() {
  console.log('This will appear immediately');
  
  setTimeout(function() {
    console.log('This appears after 3 seconds');
  }, 3000);
  
  console.log('This also appears immediately');
}

// Cancel timeout
let timeoutId = setTimeout(function() {
  console.log('This might not execute');
}, 5000);

// Cancel it
clearTimeout(timeoutId);
```

### **Q5: Auto-save Feature**
```javascript
let autoSaveInterval;

function startAutoSave() {
  autoSaveInterval = setInterval(function() {
    const content = document.getElementById('editor').value;
    saveContent(content);
    console.log('Auto-saved at', new Date().toLocaleTimeString());
  }, 30000); // Every 30 seconds
}

function saveContent(content) {
  // Save to localStorage or send to server
  localStorage.setItem('draft', content);
}

function stopAutoSave() {
  clearInterval(autoSaveInterval);
}
```

---

## 8. OBJECT & JSON OPERATIONS {#objects}

### **Q1: Filter Array of Objects**
```javascript
const users = [
  {name: 'John', age: 25, city: 'NYC'},
  {name: 'Jane', age: 30, city: 'LA'},
  {name: 'Bob', age: 20, city: 'NYC'},
  {name: 'Alice', age: 35, city: 'Chicago'}
];

// Get users older than 25
const olderUsers = users.filter(user => user.age > 25);
console.log(olderUsers);

// Get users from NYC
const nycUsers = users.filter(user => user.city === 'NYC');
console.log(nycUsers);
```

### **Q2: Map Array of Objects**
```javascript
const users = [
  {name: 'John', age: 25},
  {name: 'Jane', age: 30},