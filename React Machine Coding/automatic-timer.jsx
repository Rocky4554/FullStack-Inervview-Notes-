import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 5) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 500);

      // cleanup (good practice)
      return () => clearTimeout(timer);
    }
  }, [count]);

  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4',
    },
    p:{
        color:'red',
    }
  };

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Hello, World!</h1>
      <div>
        <p style={styles.p}>Count: {count}</p>
      </div>
    </div>
  );
}

export default App;
