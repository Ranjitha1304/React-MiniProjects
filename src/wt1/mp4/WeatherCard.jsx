import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ city, temperature, condition }) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p>Temperature: {temperature}°C</p>
      
      {/* ✅ JSX Expression */}
      <p>{temperature > 30 ? "Hot Day 🌞" : "Cool Day ❄️"}</p>

      {/* ✅ Conditional Rendering */}
      <p>Condition: {condition}</p>
    </div>
  );
};

// ✅ Default Props
WeatherCard.defaultProps = {
  condition: "Sunny",
};

export default WeatherCard;
