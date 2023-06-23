import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./redux/WeatherSlice";
import historicalWeatherReducer from "./redux/HistoricalWeatherSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    historicalWeather: historicalWeatherReducer,
  },
});

export default store;
