
import WeatherCard from "./WeatherCard";

const WeatherDashboard = () => {
  const weatherData = [
    { id: 1, city: "Chennai", temperature: 35, condition: "Sunny" },
    { id: 2, city: "Bangalore", temperature: 28, condition: "Cloudy" },
    { id: 3, city: "Mumbai", temperature: 32 }, // no condition → default "Sunny"
    { id: 4, city: "Delhi", temperature: 25, condition: "Rainy" },
  ];

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <div className="weather-list">
        {weatherData.map((w) => (
          <WeatherCard
            key={w.id}
            city={w.city}
            temperature={w.temperature}
            condition={w.condition}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherDashboard;
