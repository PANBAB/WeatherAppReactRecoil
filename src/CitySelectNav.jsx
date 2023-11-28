import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography,
  Slider,
  Button,
  Popover,
  IconButton,
} from "@mui/material";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import InfoIcon from "@mui/icons-material/Info";

const myLogo = require("./sTORMY.gif");
const footerLogo = require("./Drizzle.jpg");

const CitySelectNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedCity, setSelectedCity] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCityChange = (event, newValue) => {
    const selectedPath = cities[newValue].path;
    setSelectedCity(selectedPath);
    navigate(selectedPath);
  };

  const openPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const cities = [
    { name: "Split", path: "/" },
    { name: "Marseille", path: "/marseille" },
    { name: "Porto", path: "/porto" },
    { name: "London", path: "/london" },
    { name: "Berlin", path: "/berlin" },
    { name: "Istanbul", path: "/istanbul" },
    { name: "Tinj ", path: "/tinj" },
    { name: "Baku(EXP.)", path: "/baku" },
  ];

  return (
    <div className="CitySelect" style={styles.container}>
      <div className="Wave"></div>
      <Modal open={isModalOpen} onClose={handleCloseModal} style={styles.modal}>
        <Card sx={styles.card}>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              align="center"
              borderRadius={"10%"}
            >
              <img src={myLogo} alt="drizzle" style={styles.logo} />
            </Typography>
          </CardContent>
          <CardActions sx={styles.cardActions}>
            <Button onClick={handleCloseModal} style={styles.continueButton}>
              <b>Let's go</b>
            </Button>
          </CardActions>
        </Card>
      </Modal>

      <h1>Select a City</h1>
      <Slider
        value={cities.findIndex((city) => city.path === selectedCity)}
        onChange={handleCityChange}
        min={0}
        max={cities.length - 1}
        valueLabelDisplay="off"
        marks={cities.map((city, index) => ({
          value: index,
          label: city.name,
        }))}
        sx={styles.slider}
      />

      <div style={styles.buttonsContainer}>
        <IconButton
          color="primary"
          size="small"
          onClick={openPopover}
          style={styles.infoButton}
        >
          <InfoIcon />
        </IconButton>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={closePopover}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div style={styles.popoverContent}>
            <div style={styles.footerLogo}>
              <img src={footerLogo} alt="drizzle" style={styles.logo} />
            </div>
            <div style={styles.textContainer}>
              <p style={styles.text}>
                <b>
                  Drizzle is a weather app made to help you plan your day.
                  <br></br> It is made in React and uses Axios to fetch weather
                  data from Open-Meteo API.<br></br> Drizzle uses React Router
                  to navigate between pages and Redux toolkit to manage state.
                </b>
              </p>
              <Typography variant="body1">
                Made with{" "}
                <span role="img" style={styles.heart} aria-label="Heart">
                  ❤️
                </span>{" "}
                by{" "}
                <a
                  href="https://github.com/PANBAB"
                  rel="noreferrer"
                  style={styles.link}
                >
                  /PANBAB
                </a>
                <br />
                <a href="mailto:antepetarb@gmail.com" style={styles.emailLink}>
                  Click to contact me by mail
                </a>
              </Typography>
            </div>
          </div>
        </Popover>
        <IconButton
          color="primary"
          size="small"
          onClick={() => navigate("/weather-map")}
          style={styles.precipitationButton}
        >
          <b>Precipitation Map</b> <PublicTwoToneIcon />
        </IconButton>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    height: "100%",
  },
  card: {
    maxWidth: 600,
    margin: "100px auto",
  },
  footerLogo: {
    width: "30%",
    padding: "20px",
  },
  cardActions: {
    justifyContent: "center",
  },
  continueButton: {
    cursor: "pointer",
    backgroundColor: "#007acc",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#005faa",
    },
  },
  slider: {
    width: "85%",
    marginLeft: "7.5%",
    marginRight: "7.5%",
  },
  buttonsContainer: {
    position: "fixed",
    top: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  popoverContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "25px",
    maxWidth: "600px",
  },
  textContainer: {
    width: "70%",
  },
  text: {
    textAlign: "left",
  },
  heart: {
    color: "red",
  },
  link: {
    textDecoration: "none",
    color: "#e36414",
  },
  emailLink: {
    textDecoration: "none",
    color: "#fb8b24",
  },
  logo: {
    width: "100%",
  },
};

export default CitySelectNav;
