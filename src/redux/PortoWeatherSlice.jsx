import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPortoWeatherData = createAsyncThunk(
  "weather/fetchPortoWeatherData",
  async () => {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=41.1496&longitude=-8.611&hourly=temperature_2m,precipitation,weathercode,surface_pressure,windspeed_180m,winddirection_180m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&forecast_days=1&timezone=Europe%2FLondon"
    );
    return response.data;
  }
);

const PortoWeatherSlice = createSlice({
  name: "PortoWeather",
  initialState: null,
  reducers: {
    setPortoWeatherData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPortoWeatherData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setPortoWeatherData } = PortoWeatherSlice.actions;

export const selectPortoWeatherData = (state) => state.PortoWeather;

export default PortoWeatherSlice.reducer;
