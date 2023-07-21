import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTinjWeatherData = createAsyncThunk(
  "weather/fetchTinjWeatherData",
  async () => {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=43.2248&longitude=16.9842&hourly=temperature_2m,precipitation,weathercode,surface_pressure,windspeed_180m,winddirection_180m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&forecast_days=1&timezone=Europe%2FZagreb"
    );
    return response.data;
  }
);

const TinjWeatherSlice = createSlice({
  name: "TinjWeather",
  initialState: null,
  reducers: {
    setTinjWeatherData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTinjWeatherData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setTinjWeatherData } = TinjWeatherSlice.actions;

export const selectTinjWeatherData = (state) => state.TinjWeather;

export default TinjWeatherSlice.reducer;
