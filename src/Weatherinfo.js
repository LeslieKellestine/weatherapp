import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo (props) {

return (
    <div className="WeatherInfo">
        <img src={props.data.icon} alt={props.data.description} className="sunheader" />
        <h1> {props.data.city} </h1>
        <h2>
          <span className="temperature"> {Math.round(props.data.temperature)}</span>
          <span className="units"> {props.data.unit}</span>
        </h2>
        <ul>
          <li className="text-capitalize">
            <strong> {props.data.description}</strong>
          </li>
          <li>
            Humidity:
            <strong> {props.data.humidity}</strong>%
          </li>
          <li>
            Wind:
            <strong> {Math.round(props.data.wind)}</strong>km/h
          </li>
        </ul>
        <p className="highLow">
        <span> <FormattedDate date={props.data.date} /></span>
         <br />
          <span>{Math.round(props.data.high)}°</span> | <span> {Math.round(props.data.
            low)}°</span>
        </p>
      </div>
    );
}