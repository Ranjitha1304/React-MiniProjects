import React, { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");      // input value
  const [submittedName, setSubmittedName] = useState(""); // final submitted value

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    setSubmittedName(name); // update submitted name
    setName(""); // clear input after submit (optional)
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Name Form</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "8px 15px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "6px",
          }}
        >
          Submit
        </button>
      </form>

      {/* Display submitted name */}
      {submittedName && <h3>Hello, {submittedName}! 👋</h3>}
    </div>
  );
}

export default NameForm;
