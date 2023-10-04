import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBakuHistoricalData = createAsyncThunk(
  "weather/fetchBakuHistoricalData",
  async () => {
    const response = await axios.get(
      "https://archive-api.open-meteo.com/v1/archive?latitude=40.4093&longitude=49.8671&start_date=2022-06-21&end_date=2023-10-04&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,precipitation_hours,winddirection_10m_dominant&timezone=Asia%2FBaku&min=2023-06-02&max=2023-10-04"
    );
    return response.data;
  }
);

const bakuHistoricalSlice = createSlice({
  name: "bakuHistorical",
  initialState: null,
  reducers: {
    setBakuHistoricalData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBakuHistoricalData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setBakuHistoricalData } = bakuHistoricalSlice.actions;

export const selectBakuHistoricalData = (state) => state.bakuHistorical;

export default bakuHistoricalSlice.reducer;
