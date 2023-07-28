import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import AnimatedDivider from "./AnimatedDivider";
import "../App.css";
import { WorkData } from "../Data";
import WorkCard from "./WorkCard";

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
      <AnimatedDivider />
      <Grid
        container
        sx={{
          py: 2,
          display: "flex",
          justifyContent: "center",
          maxWidth: "90ch",
        }}
        spacing={2}
      >
        {WorkData.map((work) => (
          <Grid item xs={12} md={6} lg={4}>
            {WorkCard(work.vidUrl, work.name, work.description)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
