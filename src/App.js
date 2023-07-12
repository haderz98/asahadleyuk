import React from "react";
import NavBar from "./components/NavBar";
import NameInfo from "./components/NameInfo";
import { Box } from "@mui/material";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div>
      <NavBar />
      <Box sx={{ mx: 4 }}>
        <NameInfo />
        <Experience />
      </Box>
    </div>
  );
};

export default App;
