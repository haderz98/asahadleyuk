import { Box } from "@mui/material";
import React from "react";
import TypeIt from "typeit-react";

const TypingProfession = () => {
  return (
    <Box
      sx={{
        fontFamily: "Radio Canada, sans-serif",
        fontSize: { xs: "2.5rem", sm: "3rem" },
        fontWeight: "700",
        color: "white",
      }}
    >
      <TypeIt
        options={{ loop: true, speed: 100, deleteSpeed: 100 }}
        getBeforeInit={(instance) => {
          instance
            .type("Software Developer.")
            .pause(1000)
            .delete(20)
            .pause(1000)
            .type("Unity Developer.")
            .pause(1000)
            .delete(20)
            .pause(1000)
            .type("React Developer.")
            .pause(1000)
            .delete(20)
            .pause(1000);
          return instance;
        }}
      />
    </Box>
  );
};

export default TypingProfession;
