import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { historicalDataState } from "./RecoilState";
import { Card, CardContent, CardHeader } from "@mui/material";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function HistoricalData() {
  const [historicalData, setHistoricalData] =
    useRecoilState(historicalDataState);

  return (
    <div>
      <Card variant="outlined">
        <CardHeader title="Historical Data" />
        <CardContent>
          <h2>Historical Data</h2>
          {historicalData}
        </CardContent>
      </Card>
    </div>
  );
}

export default HistoricalData;
