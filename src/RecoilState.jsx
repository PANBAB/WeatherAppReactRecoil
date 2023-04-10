import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const cityNameState = atom({
  key: "cityNameState",
  default: "",
});

export const currentWeatherState = atom({
  key: "currentWeatherState",
  default: null,
});

export const historicalDataState = atom({
  key: "historicalDataState",
  default: null,
});
