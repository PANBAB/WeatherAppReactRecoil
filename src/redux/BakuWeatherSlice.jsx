import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBakuWeatherData = createAsyncThunk(
  "BakuWeather/fetchBakuWeatherData",
  async () => {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=40.4093&longitude=49.8671&hourly=temperature_2m,precipitation,weathercode,surface_pressure,windspeed_180m,winddirection_180m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FBaku&forecast_days=3"
    );
    return response.data;
  }
);

const BakuWeatherSlice = createSlice({
  name: "BakuWeather",
  initialState: null,
  reducers: {
    setBakuWeatherData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBakuWeatherData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setBakuWeatherData } = BakuWeatherSlice.actions;

export const selectBakuWeatherData = (state) => state.BakuWeather;

export default BakuWeatherSlice.reducer;
