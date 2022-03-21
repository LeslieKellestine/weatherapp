import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props) {
  let[loaded, setLoaded]= useState(false);
  let[forecast, setforecast]=useState(null);

  useEffect (()=>{
    setLoaded(false);
  },[props.coordinates]);

  function handleResponse(response) {
    setforecast(response.data.daily);
    setLoaded(true);
  }

if(loaded){
  return (
    <div className="WeatherForecast">
      <div className="row">
          {forecast.map(function(dailyForecast,index){
            if (index <6){
              return (
              <div className="col" key={index}>
              <WeatherForecastDay data={dailyForecast}/>
              </div>
            );
          }})}   
    </div>
    </div>
  );
} else {

  let apiKey = "05d9d7923ffdfb53fdfae4f1f915dae5";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return null;
}
}
