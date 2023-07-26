import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
};

export default App;
