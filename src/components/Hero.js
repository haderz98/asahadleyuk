import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box
      sx={{
        flex: 1,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        px: 2,
        textAlign: "center",
      }}
    >
      <Avatar sx={{ width: "120px", height: "120px" }}></Avatar>
      <Box
        sx={{
          fontFamily: "Radio Canada, sans-serif",
          fontSize: "3rem",
          fontWeight: "600",
          color: "#72E2AE",
        }}
      >
        Hi, I'm Asa Hadley
        <Box
          sx={{
            fontFamily: "Radio Canada, sans-serif",
            fontSize: "3rem",
            fontWeight: "600",
            color: "white",
          }}
        >
          Software Developer
        </Box>
      </Box>
      <Typography
        sx={{
          fontFamily: "Radio Canada, sans-serif",
          fontSize: "1.2rem",
          fontWeight: "400",
          color: "#bfbecb",
          maxWidth: "85ch",
        }}
      >
        Experienced software developer with 4+ years of industry experience.
        Proficient in multiple languages. Specialised in games, VR, and web
        development.
      </Typography>
    </Box>
  );
};

export default Hero;
