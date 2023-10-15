import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SplitCurrentData from "./Components/SplitCurrentData.jsx";
import SplitHistoricalData from "./Components/SplitHistoricalData.jsx";
import PortoCurrentData from "./Components/PortoCurrentData";
import PortoHistoricalData from "./Components/PortoHistoricalData";
import MarseilleCurrentData from "./Components/MarseilleCurrentData";
import MarseilleHistoricalData from "./Components/MarseilleHistoricalData";
import LondonCurrentData from "./Components/LondonCurrentData";
import LondonHistoricalData from "./Components/LondonHistoricalData";
import BerlinCurrentData from "./Components/BerlinCurrentData";
import BerlinHistoricalData from "./Components/BerlinHistoricalData";
import IstanbulCurrentData from "./Components/IstanbulCurrentData";
import IstanbulHistoricalData from "./Components/IstanbulHistoricalData";
import TinjCurrentData from "./Components/TinjCurrentData";
import TinjHistoricalData from "./Components/TinjHistoricalData";
//Experimental Baku
import BakuCurrentData from "./Components/BakuCurrentData";
import BakuHistoricalData from "./Components/BakuHistoricalData";

import WeatherMap from "./WeatherMapReact";
import CitySelectNav from "./CitySelectNav";

function App() {
  return (
    <div className="App">
      <CitySelectNav />
      <p>
        <b>
          Drizzle is a weather app made to help you plan your day. It is made in
          React and uses Axios to fetch weather data from Open-Meteo API.
          Drizzle uses React Router to navigate between pages and Redux toolkit
          to manage state.
        </b>
      </p>

      <Routes>
        <Route path="/" element={<SplitCurrentData />} />
        <Route path="/marseille" element={<MarseilleCurrentData />} />
        <Route path="/porto" element={<PortoCurrentData />} />
        <Route path="/split-historical" element={<SplitHistoricalData />} />
        <Route
          path="/marseille-historical"
          element={<MarseilleHistoricalData />}
        />
        <Route path="/porto-historical" element={<PortoHistoricalData />} />
        <Route path="/london" element={<LondonCurrentData />} />
        <Route path="/london-historical" element={<LondonHistoricalData />} />
        <Route path="/berlin" element={<BerlinCurrentData />} />
        <Route path="/berlin-historical" element={<BerlinHistoricalData />} />
        <Route path="/istanbul" element={<IstanbulCurrentData />} />
        <Route
          path="/istanbul-historical"
          element={<IstanbulHistoricalData />}
        />
        <Route path="/baku" element={<BakuCurrentData />} />
        <Route path="/baku-historical" element={<BakuHistoricalData />} />
        <Route path="/tinj" element={<TinjCurrentData />} />
        <Route path="/tinj-historical" element={<TinjHistoricalData />} />
        <Route path="/weather-map" element={<WeatherMap />} />
      </Routes>
    </div>
  );
}

export default App;
