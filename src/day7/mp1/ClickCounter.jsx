import React, { useState } from "react";

function ClickCounter() {
  // useState hook to keep track of counter
  const [count, setCount] = useState(0);

  // function to handle click
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Click Counter</h2>

      {/* Button to increase counter */}
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      >
        Click Me
      </button>

      {/* Display counter */}
      <h3>Counter Value: {count}</h3>
    </div>
  );
}

export default ClickCounter;
