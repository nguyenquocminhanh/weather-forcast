import React, { useState } from 'react';
import WeatherForm from './componenets/WeatherForm/WeatherForm';
import axios from 'axios';
import WeatherInfo from './componenets/WeatherInfo/WeatherInfo';
import classes from './App.module.css';

interface Weather {
  name: string,
  main: {temp: string, humidity: string, feels_like: string}, 
  wind: {speed: string},
  weather: { description: string }[],
}

const App: React.FC = () => {
  const [weather, setWeather] = useState<Weather | null>(null);

  const submitFormHandler = (location: string) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
    .then(response => {
      if (response.data.cod === '404') {
        alert('City Not Found');
      } else { 
        setWeather(response.data);
        setWeather(response.data);
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className={classes.Container}>
      <h1>Weather Forecast</h1> 

      <WeatherForm onSubmitForm={submitFormHandler}/>

      { weather && <WeatherInfo weatherData={weather}/> }
    </div>
  );
}

export default App;
