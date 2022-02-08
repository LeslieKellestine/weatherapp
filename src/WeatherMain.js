import React from "react";
import "./Weather.css";

export default function Weather() {
    let weatherData = {
      city: "Ottawa",
      temperature: 2,
      unit: "°C",
      date: "Monday 12:00",
      description: "Snow",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/snow_light.png",
      humidity: 88,
      wind: 5
    };
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <form>
              <input
                type="text"
                placeholder="Select a City"
                autoComplete="off"
                autoFocus="on"
                className="form-control"
              />
            </form>
          </div>
          <div className="col-3">
            <button className="search-city form-control btn btn-primary shadow-sm w-100">
              Search
            </button>
          </div>
        </div>
        <img src={weatherData.imgUrl} alt="" className="sunheader" />
        <h1> {weatherData.city} </h1>
        <h2>
          <span className="temperature"> {weatherData.temperature}</span>
          <span className="units"> {weatherData.unit} </span>
        </h2>
        <ul>
          <li>
            <strong> {weatherData.description}</strong>
          </li>
          <li>
            Humidity:
            <strong> {weatherData.humidity}</strong>%
          </li>
          <li>
            Wind:
            <strong> {weatherData.wind}</strong>km/h
          </li>
        </ul>
        <p className="highLow">
          <span>35°</span> | <span>16°</span>
        </p>
      </div>
    );
  }