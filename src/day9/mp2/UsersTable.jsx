import React from "react";

const UsersTable = () => {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "David", age: 28 },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <table
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          width: "50%",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <React.Fragment key={user.id}>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {user.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {user.age}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
