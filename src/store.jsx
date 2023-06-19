import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./redux/WeatherSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;
