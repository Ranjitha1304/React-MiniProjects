
function TemperatureDisplay({ temp }) {
  let message = "";
  let color = "";

  if (temp > 30) {
    message = "Hot";
    color = "red";
  } else if (temp < 15) {
    message = "Cold";
    color = "blue";
  } else {
    message = "Normal";
    color = "green";
  }

  // Inline style for dynamic color
  const style = {
    fontSize: "20px",
    fontWeight: "bold",
    color: color,
    margin: "10px 0",
    textAlign: "center"
  };

  return (
    <div style={style}>
      Temperature: {temp}°C → {message}
    </div>
  );
}

export default TemperatureDisplay;
