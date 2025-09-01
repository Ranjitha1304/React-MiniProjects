import React, { useState } from "react";

function CounterApp() {
  // useState to hold the counter value
  const [count, setCount] = useState(0);

  // Handlers
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter App</h2>
      <h1>{count}</h1>
      <div>
        <button onClick={increase} style={{ margin: "5px" }}>Increase</button>
        <button onClick={decrease} style={{ margin: "5px" }}>Decrease</button>
        <button onClick={reset} style={{ margin: "5px" }}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
