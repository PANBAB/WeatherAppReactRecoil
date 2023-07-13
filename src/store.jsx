import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./redux/WeatherSlice";
import historicalWeatherReducer from "./redux/HistoricalWeatherSlice";
import MarseilleWeatherReducer from "./redux/MarseilleWeatherSlice";
import MarseilleHistoricalReducer from "./redux/MarseilleHistoricalWeatherSlice";
import PortoWeatherReducer from "./redux/PortoWeatherSlice";
import PortoHistoricalReducer from "./redux/PortoHistoricalWeatherSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    historicalWeather: historicalWeatherReducer,
    MarseilleWeather: MarseilleWeatherReducer,
    marseilleHistorical: MarseilleHistoricalReducer,
    PortoWeather: PortoWeatherReducer,
    portoHistorical: PortoHistoricalReducer,
  },
});

export default store;
