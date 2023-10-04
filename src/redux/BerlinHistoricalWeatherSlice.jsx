import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBerlinHistoricalData = createAsyncThunk(
  "weather/fetchBerlinHistoricalData",
  async () => {
    const response = await axios.get(
      "https://archive-api.open-meteo.com/v1/archive?latitude=52.5200&longitude=13.4050&start_date=2022-06-21&end_date=2023-10-04&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,precipitation_hours,winddirection_10m_dominant&timezone=Europe%2FBerlin&min=2023-06-02&max=2023-10-04"
    );
    return response.data;
  }
);

const berlinHistoricalSlice = createSlice({
  name: "berlinHistorical",
  initialState: null,
  reducers: {
    setBerlinHistoricalData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBerlinHistoricalData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setBerlinHistoricalData } = berlinHistoricalSlice.actions;

export const selectBerlinHistoricalData = (state) => state.berlinHistorical;

export default berlinHistoricalSlice.reducer;
