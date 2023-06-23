import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async () => {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=43.51&longitude=16.44&hourly=temperature_2m,precipitation,weathercode,surface_pressure,windspeed_180m,winddirection_180m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&forecast_days=1&timezone=Europe%2FBerlin"
    );
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "Weather",
  initialState: null,
  reducers: {
    setWeatherData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setWeatherData } = weatherSlice.actions;

export const selectWeatherData = (state) => state.weather;

export default weatherSlice.reducer;
