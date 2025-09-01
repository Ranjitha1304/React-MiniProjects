import React, { useState } from "react";

function NameDisplay() {
  // useState to store the entered name
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Name Display App</h2>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)} // update state on typing
        style={{ padding: "8px", margin: "10px", borderRadius: "5px" }}
      />

      {/* Display Name */}
      <h3>Your Name: {name}</h3>
    </div>
  );
}

export default NameDisplay;
