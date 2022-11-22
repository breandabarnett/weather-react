import React from "react";
import "./Weather.css";

export default function Weather(props) {
  let weatherData = {
    city: "Tokyo",
    temperature: 19,
    date: "Wednesday 5:30",
    description: "Cloudy",
    mainIcon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: 80,
    wind: 5,
    pressure: 900,
    feelsLike: 17,
  };

  return (
    <div className="Weather">
      <div className="search-container">
        <div className="row">
          <form>
            <input
              type="text"
              placeholder=" Enter a city name..."
              className="col-9 enter-city search shadow sm"
              autoComplete="off"
            />
            <input
              type="submit"
              value="search"
              className="col-3 search-button shadow sm ms-1"
            />
          </form>
        </div>
      </div>

      <div className="current-weather-container">
        <div className="row">
          <div className="col-8">
            <div className="main-temperature">
              <span className="current-temp">{weatherData.temperature}</span>
              <span className="units">
                <a href="/" className="active">
                  °C
                </a>
                <a href="/"> | °F</a>
              </span>
            </div>
            <div className="main-city">
              <h1 className="current-city">{weatherData.city}</h1>
            </div>
            <div className="current-time">{weatherData.date}</div>
            <div className="current-description">
              <span>{weatherData.description}</span>
            </div>
          </div>
          <div className="col-4">
            <div className="icon">
              <span>
                <img
                  src={weatherData.mainIcon}
                  alt=""
                  className="weather-icon"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="details-container">
        <div className="row">
          <div className=" col-3 humidity">
            <p className="details-name">Humidity</p>
            <p className="details-info">
              <span>{weatherData.humidity}</span> %
            </p>
          </div>
          <div className="col-3 wind">
            <p className="details-name">Wind</p>
            <p className="details-info">
              <span>{weatherData.wind}</span> km/h
            </p>
          </div>
          <div className=" col-3 pressure">
            <p className="details-name">Pressure</p>
            <p className="details-info">
              <span>{weatherData.pressure}</span> hPa
            </p>
          </div>
          <div className=" col-3 feelsLike">
            <p className="details-name">Feels Like</p>
            <p className="details-info">
              <span>{weatherData.feelsLike}</span>°C
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className="credits">
          <a
            href="https://github.com/breandabarnett"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          • Designed by
          <a
            href="https://breanda.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Breanda Barnett
          </a>
        </div>
      </footer>
    </div>
  );
}
