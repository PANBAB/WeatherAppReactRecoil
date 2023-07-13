import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPortoHistoricalData = createAsyncThunk(
  "weather/fetchPortoHistoricalData",
  async () => {
    const response = await axios.get(
      "https://archive-api.open-meteo.com/v1/archive?latitude=41.1496&longitude=-8.611&start_date=2022-06-21&end_date=2023-07-13&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,precipitation_hours,winddirection_10m_dominant&timezone=Europe%2FLondon&models=best_match"
    );
    return response.data;
  }
);

const portoHistoricalSlice = createSlice({
  name: "portoHistorical",
  initialState: null,
  reducers: {
    setPortoHistoricalData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPortoHistoricalData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setPortoHistoricalData } = portoHistoricalSlice.actions;

export const selectPortoHistoricalData = (state) => state.portoHistorical;

export default portoHistoricalSlice.reducer;
