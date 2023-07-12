import React from "react";
import NavBar from "./components/NavBar";
import NameInfo from "./components/NameInfo";
import { Stack } from "@mui/material";

const App = () => {
  return (
    <div>
      <Stack>
        <NavBar />
        <NameInfo />
      </Stack>
    </div>
  );
};

export default App;
