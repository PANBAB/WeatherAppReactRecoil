import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";

import WeatherIconComponent from "./WeatherIconComponent";
import {
  fetchTinjWeatherData,
  selectTinjWeatherData,
} from "../redux/TinjWeatherSlice";

const TinjCurrentData = () => {
  const dispatch = useDispatch();
  const TinjWeatherData = useSelector(selectTinjWeatherData);
  const [selectedHour, setSelectedHour] = useState(
    new Date().getHours().toString()
  );

  useEffect(() => {
    if (!TinjWeatherData) {
      dispatch(fetchTinjWeatherData());
    }
  }, [dispatch, TinjWeatherData]);

  const handleHourSelect = (event) => {
    setSelectedHour(event.target.value);
  };

  if (!TinjWeatherData) {
    return <div></div>;
  }

  const { daily, hourly } = TinjWeatherData;

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={9} container alignItems="center">
          <Grid item>
            <Typography variant="h3">Hourly Weather</Typography>
          </Grid>
          <Grid item>
            <FormControl
              variant="standard"
              color="primary"
              sx={{ m: 1, minWidth: 120 }}
            >
              <InputLabel>Hour select</InputLabel>
              <Select value={selectedHour} onChange={handleHourSelect}>
                {hourly.time.map((time, index) => (
                  <MenuItem
                    key={index}
                    value={new Date(time).getHours().toString()}
                  >
                    {new Date(time).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid container spacing={1}>
            {hourly.time.map((time, index) => {
              const hour = new Date(time).getHours();
              if (hour.toString() === selectedHour) {
                return (
                  <Grid item xs={12} sm={4} key={index}>
                    <Card>
                      <CardContent>
                        <Typography variant="h5">
                          <WeatherIconComponent
                            code={hourly.weathercode[index]}
                          />
                        </Typography>

                        <Typography variant="h5">
                          Temperature: {hourly.temperature_2m[index]} °C
                        </Typography>
                        <Typography variant="body1">
                          Precipitation: {hourly.precipitation[index]} mm
                        </Typography>
                        <Typography variant="body1">
                          Surface Pressure: {hourly.surface_pressure[index]} hPa
                        </Typography>
                        <Typography variant="body1">
                          Wind Speed: {hourly.windspeed_180m[index]} km/h
                        </Typography>
                        <Typography variant="body1">
                          Wind Direction: {hourly.winddirection_180m[index]} °
                        </Typography>
                        <Typography variant="body1">
                          Temperature (180 m): {hourly.temperature_180m[index]}{" "}
                          °C
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              }
              return null;
            })}
          </Grid>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="h3">Daily Weather</Typography>
          {daily.time.map((time, index) => {
            const sunriseHour = new Date(daily.sunrise[index]).getHours();
            const sunriseMinute = new Date(daily.sunrise[index]).getMinutes();
            const sunsetHour = new Date(daily.sunset[index]).getHours();
            const sunsetMinute = new Date(daily.sunset[index]).getMinutes();
            const sunrise = `${sunriseHour}:${sunriseMinute}`;
            const sunset = `${sunsetHour}:${sunsetMinute}`;

            return (
              <Card key={index}>
                <CardContent>
                  <Typography variant="h5">
                    <WeatherIconComponent code={hourly.weathercode[index]} />
                  </Typography>
                  <Typography variant="h5">Date: {time}</Typography>
                  <Typography variant="body1">
                    Max Temperature: {daily.temperature_2m_max[index]} °C
                  </Typography>
                  <Typography variant="body1">
                    Min Temperature: {daily.temperature_2m_min[index]} °C
                  </Typography>
                  <Typography variant="body1">
                    Sunrise: {sunrise} am{" "}
                  </Typography>
                  <Typography variant="body1">Sunset: {sunset} pm</Typography>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
        <Button variant="outlined">
          <Link to="/tinj-historical">Tinj Historical data</Link>
        </Button>
        <HistoryRoundedIcon fontSize="large" color="primary" />
      </Grid>
    </div>
  );
};

export default TinjCurrentData;
