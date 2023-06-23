import React from "react";
import { WiDaySunny } from "react-icons/wi";

import {
  WiCloud,
  WiCloudy,
  WiFog,
  WiSprinkle,
  WiRaindrops,
  WiRain,
  WiSnow,
  WiSnowflakeCold,
  WiThunderstorm,
} from "react-icons/wi";

const weatherIcons = {
  0: WiDaySunny,
  1: WiCloud,
  2: WiCloudy,
  3: WiCloudy,
  45: WiFog,
  48: WiFog,
  51: WiSprinkle,
  53: WiRaindrops,
  55: WiRaindrops,
  56: WiSnowflakeCold,
  57: WiSnowflakeCold,
  61: WiRain,
  63: WiRain,
  65: WiRain,
  66: WiSnow,
  67: WiSnow,
  71: WiSnow,
  73: WiSnow,
  75: WiSnow,
  77: WiSnowflakeCold,
  80: WiSprinkle,
  81: WiSprinkle,
  82: WiSprinkle,
  85: WiSnowflakeCold,
  86: WiSnowflakeCold,
  95: WiThunderstorm,
  96: WiThunderstorm,
  99: WiThunderstorm,
};
const WeatherIconComponent = ({ code }) => {
  const IconComponent = weatherIcons[code];

  return IconComponent ? <IconComponent /> : null;
};

export default WeatherIconComponent;
