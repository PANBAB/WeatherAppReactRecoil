import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIstanbulWeatherData = createAsyncThunk(
  "weather/fetchIstanbulWeatherData",
  async () => {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&hourly=temperature_2m,precipitation,weathercode,surface_pressure,windspeed_180m,winddirection_180m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&forecast_days=1&timezone=Europe%2FIstanbul"
    );
    return response.data;
  }
);

const IstanbulWeatherSlice = createSlice({
  name: "IstanbulWeather",
  initialState: null,
  reducers: {
    setIstanbulWeatherData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIstanbulWeatherData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setIstanbulWeatherData } = IstanbulWeatherSlice.actions;

export const selectIstanbulWeatherData = (state) => state.IstanbulWeather;

export default IstanbulWeatherSlice.reducer;
