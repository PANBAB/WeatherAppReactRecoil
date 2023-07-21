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
    <div className="CitySelect">
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ maxWidth: 600, my: 100 }}>
          <CardContent>
            <Typography variant="h5" component="div" align="center">
              <img src={myLogo} alt="drizzle" style={{ width: "100%" }} />
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={handleCloseModal}
              style={{ cursor: "pointer" }}
              disableElevation
            >
              Click anywhere to continue
            </Button>
          </CardActions>
        </Card>
      </Modal>

      {isTitleVisible && <h1>Drizzle Weather</h1>}

      <h1>Select a city:</h1>
      <RadioGroup row value={selectedCity} onChange={handleCityChange}>
        {cities.map((city) => (
          <FormControlLabel
            key={city.path}
            value={city.path}
            control={<Radio />}
            label={city.name}
            labelPlacement="end"
            boxshadow={1}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default CitySelectNav;
