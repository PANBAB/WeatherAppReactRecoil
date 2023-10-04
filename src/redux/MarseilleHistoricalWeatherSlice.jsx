import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMarseilleHistoricalData = createAsyncThunk(
  "weather/fetchMarseilleHistoricalData",
  async () => {
    const response = await axios.get(
      "https://archive-api.open-meteo.com/v1/archive?latitude=43.297&longitude=5.3811&start_date=2022-06-21&end_date=2023-10-04&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,precipitation_hours,winddirection_10m_dominant&timezone=Europe%2FBerlin&min=2023-06-02&max=2023-10-04"
    );
    return response.data;
  }
);

const marseilleHistoricalSlice = createSlice({
  name: "marseilleHistorical",
  initialState: null,
  reducers: {
    setMarseilleHistoricalData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMarseilleHistoricalData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setMarseilleHistoricalData } = marseilleHistoricalSlice.actions;

export const selectMarseilleHistoricalData = (state) =>
  state.marseilleHistorical;

export default marseilleHistoricalSlice.reducer;
