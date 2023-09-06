import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHistoricalWeatherData = createAsyncThunk(
  "weather/fetchHistoricalWeatherData",
  async () => {
    const response = await axios.get(
      "https://archive-api.open-meteo.com/v1/archive?latitude=43.51&longitude=16.44&start_date=2022-06-21&end_date=2023-09-06&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,precipitation_hours,winddirection_10m_dominant&timezone=Europe%2FBerlin&min=2023-06-02&max=2023-09-06"
    );
    return response.data;
  }
);

const historicalWeatherSlice = createSlice({
  name: "historicalWeather",
  initialState: null,
  reducers: {
    setHistoricalWeatherData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHistoricalWeatherData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setHistoricalWeatherData } = historicalWeatherSlice.actions;

export const selectHistoricalWeatherData = (state) => state.historicalWeather;

export default historicalWeatherSlice.reducer;
