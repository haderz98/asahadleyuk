import { Box, Typography, Grid, Stack, CardMedia } from "@mui/material";
import React from "react";
import HeaderDivider from "./HeaderDivider";
import "../App.css";
import VideoPlayer from "./VideoPlayer";
import EBike from "../videos/eBike.mp4";
import NPCC from "../videos/npcc_ppe.mp4";
import PICO from "../videos/pico_adb.mp4";

const experience = [
  {
    vidUrl: EBike,
    name: "eBike Training",
    description: [
      "• VR training software developed for Halfords to assist with their eBike/eMobility course.",
      "• I developed the eBike and component information module and also created a bike pedal interaction system.",
    ],
  },
  {
    vidUrl: NPCC,
    name: "NPCC COVID-19 PPE Mini Game",
    description: [
      "• A point and click mini game that I developed for the College of Policing to provide PPE training for officers at the start of the COVID-19 pandemic.",
    ],
  },
  {
    vidUrl: PICO,
    name: "Pico Neo 3 ADB Tool",
    description: [
      "• I designed and developed a tool that provided easy setup of the Pico Neo 3 VR headset.",
      "• Written in C# and using WPF, the application provides a clean font-end for performing the core ADB commands required for setup.",
    ],
  },
];

const WorkCard = (vidUrl, name, description) => {
  return (
    <Stack
      spacing={2}
      sx={{
        bgcolor: "#121b2d",
        p: 2,
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "8px",
        minHeight: "460px",
        alignItems: "center",
      }}
    >
      <VideoPlayer url={vidUrl} />
      <Typography
        sx={{
          fontFamily: "Radio Canada, sans-serif",
          fontSize: "2rem",
          fontWeight: "700",
          color: "white",
        }}
      >
        {name}
      </Typography>
      {description.map((desc) => (
        <Typography
          sx={{
            fontFamily: "Radio Canada, sans-serif",
            fontSize: "1.1rem",
            fontWeight: "400",
            color: "#bfbecb",
          }}
        >
          {desc}
        </Typography>
      ))}
    </Stack>
  );
};

const Work = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        px: 2,
        py: 10,
        textAlign: "center",
        background:
          "repeating-linear-gradient(90deg,rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, rgba(15,23,42,1) 1px, rgba(15,23,42,1) 12.5%)",
        flexShrink: 1,
      }}
    >
      <Typography
        sx={{
          flexGrow: 1,
          fontFamily: "Radio Canada, sans-serif",
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "white",
          textTransform: "uppercase",
        }}
      >
        Work
      </Typography>
      <HeaderDivider />
      <Grid
        container
        sx={{
          py: 2,
          display: "flex",
          justifyContent: "center",
          maxWidth: "85ch",
        }}
        spacing={2}
      >
        {experience.map((work) => (
          <Grid item xs={12} md={6}>
            {WorkCard(work.vidUrl, work.name, work.description)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
