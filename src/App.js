import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SplitCurrentData from "./Components/SplitCurrentData.jsx";
import SplitHistoricalData from "./Components/SplitHistoricalData.jsx";
import PortoCurrentData from "./Components/PortoCurrentData";
import PortoHistoricalData from "./Components/PortoHistoricalData";
import MarseilleCurrentData from "./Components/MarseilleCurrentData";
import MarseilleHistoricalData from "./Components/MarseilleHistoricalData";
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
      </Routes>
    </div>
  );
}

export default App;
