import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Weather(props) {
        const [weatherData, setWeatherData] = useState({ ready: false });
        const [city, setCity] = useState(props.defaultCity);
      
        function handleResponse(response) {
            console.log(response.data);
          setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
            high: response.data.main.temp_max,
            low:  response.data.main.temp_min,
          });
        }

        function handleSubmit(event) {
            event.preventDefault();
            search();
          }
        
          function handleCityChange(event) {
            setCity(event.target.value);
          }

          function search() {
            const apiKey = "05d9d7923ffdfb53fdfae4f1f915dae5";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
          }

if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <form>
              <input
                type="text"
                placeholder="Search a City"
                autoComplete="off"
                autoFocus="on"
                className="form-control inputCity"
              />
            </form>
          </div>
          <div className="col-3">
            <button className="search-city form-control btn btn-primary shadow-sm w-100">
              Search
            </button>
          </div>
        </div>
        <img src={weatherData.icon} alt={weatherData.description} className="sunheader" />
        <h1> {weatherData.city} </h1>
        <h2>
          <span className="temperature"> {Math.round(weatherData.temperature)}</span>
          <span className="units"> {weatherData.unit}</span>
        </h2>
        <ul>
          <li className="text-capitalize">
            <strong> {weatherData.description}</strong>
          </li>
          <li>
            Humidity:
            <strong> {weatherData.humidity}</strong>%
          </li>
          <li>
            Wind:
            <strong> {Math.round(weatherData.wind)}</strong>km/h
          </li>
        </ul>
        <p className="highLow">
          <span>{Math.round(weatherData.high)}°</span> | <span> {Math.round(weatherData.low)}°</span>
        </p>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
} 