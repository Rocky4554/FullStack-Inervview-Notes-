<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Debounce Example</title>
</head>
<body>
  <h2>Debounce Search Example</h2>

  <input type="text" id="searchBox" placeholder="Type something..." />
  <p id="output">Waiting for input...</p>

  <script>
    // 1️⃣ Basic debounce function
    function debounce(func, delay) {
      let timer;
      return function(...args) {
        clearTimeout(timer);  // cancel previous timer
        timer = setTimeout(() => {
          func.apply(this, args);  // run the function after delay
        }, delay);
      };
    }

    // 2️⃣ The real function we want to delay
    function searchFunction(event) {
      const text = event.target.value;
      document.getElementById("output").textContent = `Searching for: ${text}`;
      console.log("API called with:", text);
    }

    // 3️⃣ Wrap it inside debounce
    const debouncedSearch = debounce(searchFunction, 500);

    // 4️⃣ Attach event listener
    document.getElementById("searchBox").addEventListener("input", debouncedSearch);
  </script>
</body>
</html>
