import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";

const myLogo = require("./sTORMY.gif");
const footerLogo = require("./Drizzle.jpg");

const CitySelectNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsTitleVisible(true);
  };

  const cities = [
    { name: "Split", path: "/" },
    { name: "Marseille", path: "/marseille" },
    { name: "Porto", path: "/porto" },
    { name: "London", path: "/london" },
    { name: "Berlin", path: "/berlin" },
    { name: "Istanbul", path: "/istanbul" },
    { name: "Tinj ", path: "/tinj" },
    { name: "Baku(Experimental)", path: "/baku" },
  ];

  const handleCityChange = (event) => {
    const selectedPath = event.target.value;
    setSelectedCity(selectedPath);
    navigate(selectedPath);
  };

  return (
    <div className="CitySelect" style={styles.container}>
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
            <Button
              variant="contained"
              onClick={handleCloseModal}
              style={styles.continueButton}
            >
              Click anywhere to continue
            </Button>
          </CardActions>
        </Card>
      </Modal>

      <h1>Select a city:</h1>
      <RadioGroup row value={selectedCity} onChange={handleCityChange}>
        {cities.map((city) => (
          <FormControlLabel
            key={city.path}
            value={city.path}
            control={<Radio style={styles.radio} />}
            label={city.name}
            labelPlacement="end"
          />
        ))}
      </RadioGroup>

      <div style={styles.footer}>
        <div style={styles.logoContainer}>
          <img src={footerLogo} alt="drizzle" style={styles.footerLogo} />
        </div>
        <div style={styles.footerContent}>
          <Typography variant="body2" style={styles.footerText}>
            © 2023 Drizzle Weather App
          </Typography>
          <Typography variant="body2" style={styles.footerText}>
            All rights reserved
          </Typography>
          <Typography variant="body2" style={styles.footerText}>
            Made with <span style={styles.heart}>❤️</span> by{" "}
            <a
              href="https://github.com/PANBAB"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              Ante Petar
            </a>
            <br />
            <a href="mailto:antepetarb@gmail.com" style={styles.emailLink}>
              Click to contact me by mail
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: null,
  },

  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
  card: {
    maxWidth: 600,
    margin: "100px auto",
  },
  logo: {
    width: "100%",
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
  h1: {
    textAlign: "left",
    color: "#123",
  },

  title: {
    textAlign: "center",
    color: "#333",
  },
  cityTitle: {
    textAlign: "center",
    color: "#333",
  },
  citySelect: {
    textAlign: "center",

    color: "#fca311",
    margin: "1em",
  },

  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    backgroundImage: "linear-gradient (to right, #03045e  , #023e8a)",
    borderTop: "16px solid yellow",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    borderTopRightRadius: "100%",
  },
  logoContainer: {
    marginLeft: "20px",
  },
  footerLogo: {
    width: "10%",
  },
  footerContent: {
    color: "#ae2012",
  },
  footerText: {
    margin: 0,
  },
  heart: {
    color: "red",
  },
  link: {
    color: "#ae2012",
    fontweight: "bold",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  emailLink: {
    color: "#ee9b00",

    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
};

export default CitySelectNav;
