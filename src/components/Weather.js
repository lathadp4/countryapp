import React, { useState } from "react";

const Weather = (search) => {
  const apiKey = "8acb1b350d15ecbb2541b492d33c95ad";
  const [weatherData, setWeather] = useState([{}]);

  const getWeather = () => {
    {
      fetch(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${search.search}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          console.log(data);
        });
    }
  };

  return (
    <div className="container">
      <button onClick={getWeather}>Get Weather</button>

      {typeof weatherData.current === "undefined" ? (
        <div>
          <p>Weather Report</p>
        </div>
      ) : (
        <div>
          <h4>Temperature:{weatherData.current.temperature}℃</h4>
          <h4>Wind Speed:{weatherData.current.wind_speed} m/s</h4>
          <h4>weather_icon</h4>
          <img
            src={weatherData.current.weather_icons}
            alt={weatherData.location.name}
            width="150px"
          />
        </div>
      )}
    </div>
  );
};

export default Weather;
