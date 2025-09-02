import { useState, useEffect } from "react";

const SearchUserList = () => {
  const [users, setUsers] = useState([]);       // store API users
  const [search, setSearch] = useState("");     // store search input

  // Fetch data when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // Filtered users based on search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Search User List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li
              key={user.id}
              style={{
                margin: "8px 0",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                width: "300px",
                marginInline: "auto",
                background: "#f9f9f9",
              }}
            >
              <strong>{user.name}</strong> <br />
              <span style={{ color: "gray" }}>{user.email}</span>
            </li>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchUserList;
