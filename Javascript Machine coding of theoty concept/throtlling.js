<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Throttle Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      height: 2000px; /* to make page scrollable */
      padding: 20px;
    }
    #status {
      position: fixed;
      top: 10px;
      left: 10px;
      background: #f0f0f0;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 0 4px rgba(0,0,0,0.2);
    }
  </style>
</head>
<body>

  <div id="status">Scroll to see throttling in action</div>

  <script>
    // 1️⃣ Throttle function
    function throttle(func, delay) {
      let lastTime = 0;
      return function(...args) {
        const now = Date.now();
        if (now - lastTime >= delay) {
          func.apply(this, args);
          lastTime = now;
        }
      };
    }

    // 2️⃣ Function that runs on scroll
    function handleScroll() {
      document.getElementById("status").textContent =
        "Scroll event handled at " + new Date().toLocaleTimeString();
      console.log("Scroll event fired at", new Date().toLocaleTimeString());
    }

    // 3️⃣ Throttle the scroll handler
    const throttledScroll = throttle(handleScroll, 1000); // once every 1s

    // 4️⃣ Attach event
    window.addEventListener("scroll", throttledScroll);
  </script>

</body>
</html>
