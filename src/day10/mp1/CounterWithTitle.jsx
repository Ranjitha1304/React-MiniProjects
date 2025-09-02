import { useState, useEffect } from "react";

const CounterWithTitle = () => {
  const [count, setCount] = useState(0);

  // useEffect to update document title when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter with Title Update</h2>
      <p>Current Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: "5px", padding: "8px 12px" }}
      >
        Increase
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: "5px", padding: "8px 12px" }}
      >
        Decrease
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ margin: "5px", padding: "8px 12px" }}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterWithTitle;
