// EmployeeCard.jsx
import React, { Component } from "react";

class EmployeeCard extends Component {
  render() {
    const { name, designation, department, isActive, onPromote } = this.props;

    return (
      <div style={{
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        width: "250px"
      }}>
        <h3>{name}</h3>
        <p><b>Designation:</b> {designation}</p>
        <p><b>Department:</b> {department}</p>

        {/* Conditional Rendering */}
        {isActive ? (
          <p style={{ color: "green" }}>Available ✅</p>
        ) : (
          <p style={{ color: "red" }}>Not Available ❌</p>
        )}

        {/* Button triggers callback passed from parent */}
        <button onClick={onPromote}>Promote</button>
      </div>
    );
  }
}

export default EmployeeCard;
