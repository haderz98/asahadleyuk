import { Box, Typography } from "@mui/material";
import React from "react";

const skills = [
  "C#",
  "HTML",
  "CSS",
  "React",
  "Git",
  "JavaScript",
  "UI/UX Design",
  "VR/XR",
  "Unity",
];

const SkillCard = (props) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#162033",
        p: 2,
        border: "1px solid #413f4f",
        borderRadius: "8px",
      }}
    >
      <Typography
        sx={{
          flexGrow: 1,
          fontFamily: "Radio Canada, sans-serif",
          fontSize: "1.25rem",
          fontWeight: "600",
          color: "white",
        }}
      >
        {props}
      </Typography>
    </Box>
  );
};

const Skills = () => {
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
        bgcolor: "#0F172A",
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
        Skills
      </Typography>
      <Box
        sx={{
          py: 2,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {skills.map((skill) => SkillCard(skill))}
      </Box>
    </Box>
  );
};

export default Skills;
