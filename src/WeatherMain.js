import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./Weatherinfo.js";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Weather(props) {
        const [weatherData, setWeatherData] = useState({ ready: false });
        const [city, setCity] = useState(props.defaultCity);
      
        function handleResponse(response) {
          setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            high: response.data.main.temp_max,
            low:  response.data.main.temp_min,
          });
        }

        function handleSubmit(event) {
            event.preventDefault();
            search(city);
          }
        
          function handleCityChange(event) {
            setCity(event.target.value);
          }

          function search() {
            const apiKey = "05d9d7923ffdfb53fdfae4f1f915dae5";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
          }

if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search a City"
                autoComplete="off"
                autoFocus="on"
                className="form-control inputCity"
                onChange={handleCityChange}
              />
            </form>
            </div>
            <div className="col-3">
            <button className="search-city form-control btn btn-primary shadow-sm w-100">
              Search
            </button>
          </div>
          </div>
            <WeatherInfo data={weatherData}/>
          </div>
          );
} else {
    search();
    return "Loading...";
  }
}