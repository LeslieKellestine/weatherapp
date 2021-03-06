import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo (props) {

return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
        <WeatherIcon
            code= {props.data.icon}
            size={240}
            alt={props.data.description}
            className="sunheader" />
            </div>
          <div className="col-6">
        <h1> {props.data.city} </h1>
        <h2>
        <span className="temperature">{Math.round(props.data.temperature)}</span>
         <span className="unit">°C</span>
        </h2>
        <ul>
          <li className="text-capitalize">
            <strong>{props.data.description}</strong>
          </li>
          <li>
            Humidity:<strong> {props.data.humidity}</strong>%
          </li>
          <li>
            Wind:<strong> {Math.round(props.data.wind)}</strong>km/h
          </li>
        </ul>
        </div>
        </div>
        <div className="highLow">
        <span> <FormattedDate date={props.data.date} /></span>
          <span>{Math.round(props.data.high)}°</span> | <span> {Math.round(props.data.low)}°</span>
        </div>
      </div>
    );
}