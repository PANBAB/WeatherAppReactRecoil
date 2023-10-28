import React from "react";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const WeatherMap = () => {
  return (
    <iframe
      src="src\WeatherMap.html"
      width="100%"
      height="100%"
      title="Precipitation Map"
    />
  );
};

export default WeatherMap;
