import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBerlinWeatherData = createAsyncThunk(
  "weather/fetchBerlinWeatherData",
  async () => {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=52.5200&longitude=13.4050&hourly=temperature_2m,precipitation,weathercode,surface_pressure,windspeed_180m,winddirection_180m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&forecast_days=1&timezone=Europe%2FBerlin"
    );
    return response.data;
  }
);

const BerlinWeatherSlice = createSlice({
  name: "BerlinWeather",
  initialState: null,
  reducers: {
    setBerlinWeatherData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBerlinWeatherData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setBerlinWeatherData } = BerlinWeatherSlice.actions;

export const selectBerlinWeatherData = (state) => state.BerlinWeather;

export default BerlinWeatherSlice.reducer;
