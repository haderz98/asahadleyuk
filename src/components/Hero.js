import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import ProfilePicture from "../images/avatar.png";

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
      <Avatar
        src={ProfilePicture}
        sx={{
          width: { xs: "160px", sm: "200px" },
          height: { xs: "160px", sm: "200px" },
          border: "6px solid #72E2AE",
        }}
      />
      <Box
        sx={{
          fontFamily: "Radio Canada, sans-serif",
          fontSize: "3rem",
          fontWeight: "700",
          color: "#72E2AE",
        }}
      >
        Hi, I'm Asa Hadley
        <Box
          sx={{
            fontFamily: "Radio Canada, sans-serif",
            fontSize: "3rem",
            fontWeight: "700",
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
        Experienced software developer with 4+ years in the industry. Proficient
        in multiple languages, specializing in immersive gaming, VR, and dynamic
        web solutions
      </Typography>
    </Box>
  );
};

export default Hero;
