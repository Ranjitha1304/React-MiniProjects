
// Destructure props directly
function Profile({ name = "Guest User", age = "N/A", city = "Unknown" }) {
  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

// Inline styling for card
const cardStyle = {
  width: "250px",
  margin: "15px auto",
  padding: "15px",
  backgroundColor: "#f4f9ff",
  borderRadius: "10px",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
};


export default Profile;
