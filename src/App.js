import React from "react";
import NavBar from "./components/NavBar";
import NameInfo from "./components/NameInfo";
import { Box } from "@mui/material";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ p: 2 }}>
        <NameInfo />
        <Experience />
        <Skills />
      </Box>
    </>
  );
};

export default App;
