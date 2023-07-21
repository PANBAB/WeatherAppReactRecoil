import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLondonHistoricalData = createAsyncThunk(
  "weather/fetchLondonHistoricalData",
  async () => {
    const response = await axios.get(
      "https://archive-api.open-meteo.com/v1/archive?latitude=51.5074&longitude=-0.1278&start_date=2022-06-21&end_date=2023-07-12&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,precipitation_hours,winddirection_10m_dominant&timezone=Europe%2FLondon&min=2023-06-02&max=2023-07-12"
    );
    return response.data;
  }
);

const londonHistoricalSlice = createSlice({
  name: "londonHistorical",
  initialState: null,
  reducers: {
    setLondonHistoricalData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLondonHistoricalData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setLondonHistoricalData } = londonHistoricalSlice.actions;

export const selectLondonHistoricalData = (state) => state.londonHistorical;

export default londonHistoricalSlice.reducer;
