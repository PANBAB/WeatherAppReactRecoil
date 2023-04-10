import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import { clearday } from "./assets/clearday.jpg";
// import { clearnight } from "./assets/clearnight.jpg";
// import { overcast } from "./assets/overcast.jpg";
// import { rainyday } from "./assets/rainyday.jpg";
// import { rainynight } from "./assets/rainynight.jpg";
// import { rainynight2 } from "./assets/rainynight2.jpg";
import {
  cityNameState,
  currentWeatherState,
  historicalDataState,
} from "./RecoilState.jsx";
import CurrentWeather from "./CurrentWeather.jsx";
import HistoricalData from "./HistoricalData.jsx";
import { useRecoilState } from "recoil";
import { Card, CardContent, CardHeader } from "@mui/material";

function App() {
  const [cityName, setCityName] = useRecoilState(cityNameState);
  const [currentWeather, setCurrentWeather] =
    useRecoilState(currentWeatherState);
  const [HistoricalData, setHistoricalData] =
    useRecoilState(historicalDataState);

  async function getCurrentWeather(city) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
    );
    const data = await response.json();
    if (response.ok) {
      return {
        name: data.name,
        temperature: data.main.temp,
        weather: data.weather[0].main,
      };
    } else {
      throw new Error(data.message);
    }
  }

  useEffect(() => {
    async function fetchCurrentWeather() {
      const weatherData = await getCurrentWeather(cityName);
      setCurrentWeather(weatherData);
    }
    fetchCurrentWeather();
  }, [cityName]);

  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
        <input type="text" value={cityName} onChange={handleCityChange} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={CurrentWeather}>
            <CurrentWeather
              cityName={cityName}
              currentWeather={currentWeather}
            />
          </Route>

          <Route path="./HistoricalData" element={HistoricalData}>
            <HistoricalData
              cityName={cityName}
              HistoricalData={HistoricalData}
            />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
