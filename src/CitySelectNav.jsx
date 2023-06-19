import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const myLogo = require("./drizzle.png");

const CitySelectNav = () => {
  const [isImageOpen, setIsImageOpen] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  const handleCloseImage = () => {
    setIsImageOpen(false);
    setIsButtonVisible(false);
    setIsTitleVisible(true);
  };

  return (
    <div className="CitySelect">
      {isImageOpen && <img src={myLogo} alt="drizzle" />}
      {isTitleVisible && <h1>Drizzle Weather </h1>}

      <h1>Select a city:</h1>
      <ul>
        {isButtonVisible && (
          <Button variant="outlined" color="primary" onClick={handleCloseImage}>
            Close Image
          </Button>
        )}
        <Button variant="outlined" color="warning">
          <Link to="/">Split</Link>
        </Button>
        <Button variant="outlined" color="warning">
          <Link to="/marseille">Marseille</Link>
        </Button>
        <Button variant="outlined" color="warning">
          <Link to="/porto">Porto</Link>
        </Button>
      </ul>
    </div>
  );
};

export default CitySelectNav;
