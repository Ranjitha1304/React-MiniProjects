import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const UserAuth = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "300px",
        marginInline: "auto",
      }}
    >
      <h2>User Authentication</h2>

      {isLoggedIn ? (
        <>
          <p>✅ Welcome back, User!</p>
          <button
            onClick={logout}
            style={{
              padding: "10px 20px",
              background: "red",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <p>❌ You are not logged in.</p>
          <button
            onClick={login}
            style={{
              padding: "10px 20px",
              background: "green",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default UserAuth;
