import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { currentWeatherState } from "./RecoilState";
import { Card, CardContent, CardHeader } from "@mui/material";

function CurrentWeather() {
  const [currentWeather, setCurrentWeather] =
    useRecoilState(currentWeatherState);

  return (
    <div>
      <Card variant="outlined">
        <CardHeader title="Current Weather" />
        <CardContent>
          <h2>Current Weather</h2>
          {currentWeather}
          <div>
            <h3>{currentWeather.name}</h3>
            <p>{currentWeather.temperature}°C</p>
            <p>{currentWeather.weather}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CurrentWeather;
