import React from 'react';
import Weather from "./WeatherMain";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className= "Weather-whole">
      <Weather defaultCity="Berlin" />
      </div>
      <footer>
        This project was created by Leslie Kellestine and is
      <a href="https://github.com/LeslieKellestine/weatherapp" target="_blank" rel="noreferrer"> open-sourced on GitHub </a>
    </footer>
    </div>
    </div>
  );
}

export default App;
