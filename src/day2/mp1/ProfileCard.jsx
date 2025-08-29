
import "./ProfileCard.css";

function ProfileCard({ name, age, location }) {
  // Inline styles for dynamic text
  const nameStyle = {
    color: "#2a5d9f",
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const locationStyle = {
    color: "#555",
    fontStyle: "italic",
  };

  return (
    <div className="profile-card">
      <h2 style={nameStyle}>{name}</h2>
      <p>Age: {age}</p>
      <p style={locationStyle}>Location: {location}</p>
    </div>
  );
}

export default ProfileCard;
