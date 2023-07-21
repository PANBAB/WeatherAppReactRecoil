import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./redux/WeatherSlice";
import historicalWeatherReducer from "./redux/HistoricalWeatherSlice";
import MarseilleWeatherReducer from "./redux/MarseilleWeatherSlice";
import MarseilleHistoricalReducer from "./redux/MarseilleHistoricalWeatherSlice";
import PortoWeatherReducer from "./redux/PortoWeatherSlice";
import PortoHistoricalReducer from "./redux/PortoHistoricalWeatherSlice";
import LondonWeatherSlice from "./redux/LondonWeatherSlice";
import LondonHistoricalSlice from "./redux/LondonHistoricalWeatherSlice";
import BerlinWeatherSlice from "./redux/BerlinWeatherSlice";
import BerlinHistoricalSlice from "./redux/BerlinHistoricalWeatherSlice";
import IstanbulWeatherSlice from "./redux/IstanbulWeatherSlice";
import IstanbulHistoricalSlice from "./redux/IstanbulHistoricalWeatherSlice";
import TinjWeatherSlice from "./redux/TinjWeatherSlice";
import BakuWeatherSlice from "./redux/BakuWeatherSlice";
import BakuHistoricalSlice from "./redux/BakuHistoricalWeatherSlice";
import TinjHistoricalSlice from "./redux/TinjHistoricalWeatherSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    historicalWeather: historicalWeatherReducer,
    MarseilleWeather: MarseilleWeatherReducer,
    marseilleHistorical: MarseilleHistoricalReducer,
    PortoWeather: PortoWeatherReducer,
    portoHistorical: PortoHistoricalReducer,
    LondonWeather: LondonWeatherSlice,
    londonHistorical: LondonHistoricalSlice,
    BerlinWeather: BerlinWeatherSlice,
    berlinHistorical: BerlinHistoricalSlice,
    IstanbulWeather: IstanbulWeatherSlice,
    istanbulHistorical: IstanbulHistoricalSlice,
    TinjWeather: TinjWeatherSlice,
    tinjHistorical: TinjHistoricalSlice,
    BakuWeather: BakuWeatherSlice,
    bakuHistorical: BakuHistoricalSlice,
  },
});

export default store;
