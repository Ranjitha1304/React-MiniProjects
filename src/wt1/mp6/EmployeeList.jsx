// EmployeeList.jsx
import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeList() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Alice", designation: "Junior Dev", department: "IT", isActive: true },
    { id: 2, name: "Bob", designation: "HR Manager", department: "HR", isActive: false },
    { id: 3, name: "Charlie", designation: "Intern", department: "Finance", isActive: true }
  ]);

  // Callback function for promotion
  const handlePromote = (id) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, designation: "Senior " + emp.designation } : emp
      )
    );
  };

  return (
    <div>
      <h2>Employee Directory</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {employees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            name={emp.name}
            designation={emp.designation}
            department={emp.department}
            isActive={emp.isActive}
            onPromote={() => handlePromote(emp.id)} // callback passed
          />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
