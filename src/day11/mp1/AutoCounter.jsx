import { useState, useEffect } from "react";

const AutoCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Start an interval to increment count every second
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Auto Counter</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{count}</p>
    </div>
  );
};

export default AutoCounter;
