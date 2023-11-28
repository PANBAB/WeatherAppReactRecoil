import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  Slider,
  IconButton,
  Box,
  Alert,
} from "@mui/material";
import WeatherIconComponent from "./WeatherIconComponent";
import FirstPageSharpIcon from "@mui/icons-material/FirstPageSharp";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import {
  fetchLondonHistoricalData,
  selectLondonHistoricalData,
} from "../redux/LondonHistoricalWeatherSlice.jsx";
import "./Loader.css";

const LondonHistoricalData = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const londonHistoricalData = useSelector(selectLondonHistoricalData);
  const [expandedIndex, setExpandedIndex] = React.useState(null);
  const [selectedMonth, setSelectedMonth] = React.useState(null);

  useEffect(() => {
    if (!londonHistoricalData) {
      dispatch(fetchLondonHistoricalData());
    }
  }, [dispatch, londonHistoricalData]);

  const fetchHistoricalData = () => {
    dispatch(fetchLondonHistoricalData());
  };

  if (!londonHistoricalData || !londonHistoricalData.daily) {
    return (
      <div>
        <Button onClick={fetchHistoricalData}>
          <div className="lds-dual-ring"></div>
        </Button>
      </div>
    );
  }

  const { daily } = londonHistoricalData;

  const handleCardToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const months = [...new Set(daily.time.map((date) => date.substring(0, 7)))];

  const handleMonthChange = (event, value) => {
    setSelectedMonth(months[value]);
    setExpandedIndex(null);
  };

  const marks = months.map((month, index) => ({ value: index, label: month }));

  return (
    <div>
      <div></div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Box sx={{ width: "100%" }}>
            <Collapse in={open}>
              <Alert
                severity="info"
                action={
                  <IconButton
                    aria-label="info"
                    color="primary"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                <Typography variant="h4">
                  The table below is showing data that dates a year back.
                  <br></br> Click on any month and it will show you the data for
                  that month.
                  <br></br>
                  Click on any row to see more details.
                </Typography>
              </Alert>
            </Collapse>
            <div style={{ position: "absolute" }}>
              <IconButton
                disabled={open}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <OpenInNewRoundedIcon />
              </IconButton>
            </div>
          </Box>

          <Slider
            sx={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
            value={months.indexOf(selectedMonth)}
            onChange={handleMonthChange}
            marks={marks}
            step={1}
            min={0}
            max={months.length - 1}
            valueLabelDisplay="off"
          />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Date</b>
                  </TableCell>
                  <TableCell>
                    <b>Max Temperature (°C)</b>
                  </TableCell>
                  <TableCell>
                    <b>Min Temperature (°C)</b>
                  </TableCell>
                  <TableCell>
                    <b>Precipitation (mm)</b>
                  </TableCell>
                  <TableCell>
                    <b>Wind Direction (°)</b>
                  </TableCell>
                  <TableCell>
                    <b>Rainfall (mm)</b>
                  </TableCell>
                  <TableCell>
                    <b>Snowfall (cm)</b>
                  </TableCell>
                  <TableCell>
                    <b>Precipitation Hours (h)</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {daily.time.map((date, index) => {
                  if (date.substring(0, 7) === selectedMonth) {
                    return (
                      <React.Fragment key={index}>
                        <TableRow
                          hover
                          onClick={() => handleCardToggle(index)}
                          sx={{ cursor: "pointer" }}
                        >
                          <TableCell>{date}</TableCell>
                          <TableCell>
                            {daily.temperature_2m_max[index]}
                          </TableCell>
                          <TableCell>
                            {daily.temperature_2m_min[index]}
                          </TableCell>
                          <TableCell>
                            {daily.precipitation_sum[index]}
                          </TableCell>
                          <TableCell>
                            {daily.winddirection_10m_dominant[index]}
                          </TableCell>
                          <TableCell>{daily.rain_sum[index]}</TableCell>
                          <TableCell>{daily.snowfall_sum[index]}</TableCell>
                          <TableCell>
                            {daily.precipitation_hours[index]}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell colSpan={8}>
                            <Collapse in={expandedIndex === index}>
                              <Card>
                                <CardContent>
                                  <Typography variant="h5">
                                    <div className="iconContainer">
                                      <WeatherIconComponent
                                        code={daily.weathercode[index]}
                                      />
                                    </div>
                                  </Typography>
                                  <Typography variant="body1">
                                    Max Temperature:{" "}
                                    {daily.temperature_2m_max[index]} °C
                                  </Typography>
                                  <Typography variant="body1">
                                    Min Temperature:{" "}
                                    {daily.temperature_2m_min[index]} °C
                                  </Typography>
                                  <Typography variant="body1">
                                    Precipitation:{" "}
                                    {daily.precipitation_sum[index]} mm
                                  </Typography>
                                  <Typography variant="body1">
                                    Rainfall: {daily.rain_sum[index]} mm
                                  </Typography>
                                  <Typography variant="body1">
                                    Snowfall: {daily.snowfall_sum[index]} cm
                                  </Typography>
                                  <Typography variant="body1">
                                    Precipitation Hours:{" "}
                                    {daily.precipitation_hours[index]} h
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Collapse>
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    );
                  }
                  return null;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <div style={{ position: "fixed", bottom: 10, right: 10 }}>
        <IconButton aria-label="Back" color="primary" size="small">
          <Link to="/london">
            {" "}
            <FirstPageSharpIcon fontSize="large" />
          </Link>
        </IconButton>
      </div>
    </div>
  );
};

export default LondonHistoricalData;
