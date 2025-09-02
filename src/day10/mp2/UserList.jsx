import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading users...</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>User List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              margin: "8px auto",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              width: "300px",
            }}
          >
            <strong>{user.name}</strong> <br />
            <span style={{ color: "gray" }}>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
