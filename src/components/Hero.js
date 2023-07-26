import { Box, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box
      sx={{
        flex: 1,
        height: { xs: "50vh", md: "40vh" },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        py: 6,
        px: 2,
        textAlign: "center",
        bgcolor: "#0B1224",
      }}
    >
      <Box
        sx={{
          fontFamily: "Radio Canada, sans-serif",
          fontSize: "2.5rem",
          fontWeight: "600",
          color: "#72E2AE",
        }}
      >
        Hi, I'm Asa Hadley
        <Box
          sx={{
            fontFamily: "Radio Canada, sans-serif",
            fontSize: "2.5rem",
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
        Proficient in multiple languages. Specialized in games, VR, and web
        development.
      </Typography>
    </Box>
  );
};

export default Hero;
