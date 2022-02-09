import React from 'react';
import Weather from "./WeatherMain";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className= "Weather-whole">
      <Weather defaultcity="Ottawa" />
      </div>
      <footer>
        This project was created by Leslie Kellestine and is
      <a href="https://github.com/LeslieKellestine/weatherapp" target="_blank"> open-sourced on GitHub </a>
    </footer>
    </div>
  );
}

export default App;
