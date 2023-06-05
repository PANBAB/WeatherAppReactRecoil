import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const SplitCurrentData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=43.51&longitude=16.44&hourly=temperature_2m,precipitation,windspeed_180m,winddirection_180m,temperature_180m,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Europe%2FBerlin"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const hourlyData = Array.isArray(data.hourly) ? data.hourly : [];
  const dailyData = Array.isArray(data.daily) ? data.daily : [];

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Hourly Weather</Typography>
          {hourlyData.map((hour) => (
            <Card key={hour.time}>
              <CardContent>
                <Typography variant="h5">Time: {hour.time}</Typography>
                <Typography variant="h2">
                  Temperature: {hour.temperature_2m} °C
                </Typography>
                <Typography variant="body1">
                  Precipitation: {hour.precipitation} mm
                </Typography>
                <Typography variant="body1">
                  Wind Speed: {hour.windspeed_180m} km/h
                </Typography>
                <Typography variant="body1">
                  Wind Direction: {hour.winddirection_180m} °
                </Typography>
                <Typography variant="body1">
                  Temperature (180 m): {hour.temperature_180m} °C
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Daily Weather</Typography>
          {dailyData.map((day) => (
            <Card key={day.time}>
              <CardContent>
                <Typography variant="h5">Date: {day.time}</Typography>
                <Typography variant="body1">
                  Max Temperature: {day.temperature_2m_max} °C
                </Typography>
                <Typography variant="body1">
                  Min Temperature: {day.temperature_2m_min} °C
                </Typography>
                <Typography variant="body1">Sunrise: {day.sunrise}</Typography>
                <Typography variant="body1">Sunset: {day.sunset}</Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default SplitCurrentData;
