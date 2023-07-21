import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLondonWeatherData = createAsyncThunk(
  "weather/fetchLondonWeatherData",
  async () => {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&hourly=temperature_2m,precipitation,weathercode,surface_pressure,windspeed_180m,winddirection_180m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&forecast_days=1&timezone=Europe%2FLondon"
    );
    return response.data;
  }
);

const LondonWeatherSlice = createSlice({
  name: "LondonWeather",
  initialState: null,
  reducers: {
    setLondonWeatherData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLondonWeatherData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setLondonWeatherData } = LondonWeatherSlice.actions;

export const selectLondonWeatherData = (state) => state.LondonWeather;

export default LondonWeatherSlice.reducer;
