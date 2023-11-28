import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTinjHistoricalData = createAsyncThunk(
  "weather/fetchTinjHistoricalData",
  async () => {
    const response = await axios.get(
      "https://archive-api.open-meteo.com/v1/archive?latitude=43.2248&longitude=16.9842&start_date=2022-07-01&end_date=2023-11-28&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,precipitation_hours,winddirection_10m_dominant&timezone=Europe%2FZagreb&min=2023-06-02&max=2023-11-28"
    );
    return response.data;
  }
);

const tinjHistoricalSlice = createSlice({
  name: "tinjHistorical",
  initialState: null,
  reducers: {
    setTinjHistoricalData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTinjHistoricalData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setTinjHistoricalData } = tinjHistoricalSlice.actions;

export const selectTinjHistoricalData = (state) => state.tinjHistorical;

export default tinjHistoricalSlice.reducer;
