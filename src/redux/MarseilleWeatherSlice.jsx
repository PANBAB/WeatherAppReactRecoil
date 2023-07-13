import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMarseilleWeatherData = createAsyncThunk(
  "MarseilleWeather/fetchMarseilleWeatherData",
  async () => {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=43.297&longitude=5.3811&hourly=temperature_2m,precipitation,weathercode,surface_pressure,windspeed_180m,winddirection_180m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Europe%2FBerlin&forecast_days=1"
    );
    return response.data;
  }
);

const MarseilleWeatherSlice = createSlice({
  name: "MarseilleWeather",
  initialState: null,
  reducers: {
    setMarseilleWeatherData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMarseilleWeatherData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setMarseilleWeatherData } = MarseilleWeatherSlice.actions;

export const selectMarseilleWeatherData = (state) => state.MarseilleWeather;

export default MarseilleWeatherSlice.reducer;
