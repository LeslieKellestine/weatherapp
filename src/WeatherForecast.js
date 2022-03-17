import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast () {
    function handleResponse (response) {
        console.log(response.data);
    }
    
    let ApiKey = "05d9d7923ffdfb53fdfae4f1f915dae5";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ApiKey}`;
    Axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19° </span>
            <span className="WeatherForecast-temperature-min"> 10°</span>
          </div>
        </div>
      </div>
    </div>
    );
}