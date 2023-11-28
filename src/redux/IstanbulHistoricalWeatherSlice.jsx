import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIstanbulHistoricalData = createAsyncThunk(
  "weather/fetchIstanbulHistoricalData",
  async () => {
    const response = await axios.get(
      "https://archive-api.open-meteo.com/v1/archive?latitude=41.0082&longitude=28.9784&start_date=2022-07-01&end_date=2023-10-29&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,precipitation_hours,winddirection_10m_dominant&timezone=Europe%2FIstanbul&min=2023-06-02&max=2023-10-29"
    );
    return response.data;
  }
);

const istanbulHistoricalSlice = createSlice({
  name: "istanbulHistorical",
  initialState: null,
  reducers: {
    setIstanbulHistoricalData: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIstanbulHistoricalData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setIstanbulHistoricalData } = istanbulHistoricalSlice.actions;

export const selectIstanbulHistoricalData = (state) => state.istanbulHistorical;

export default istanbulHistoricalSlice.reducer;
