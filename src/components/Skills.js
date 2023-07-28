import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import AnimatedDivider from "./AnimatedDivider";

const skills = [
  "C#",
  "HTML5",
  "CSS",
  "React",
  "Git",
  "JavaScript",
  "UI/UX Design",
  "VR/XR",
  "Unity3D",
  ".NET Framework/Core",
  ".NET MAUI",
];

const SkillCard = (props) => {
  return (
    <Box
      component={motion.div}
      initial={{ scale: 0, rotate: 180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ y: "-10px" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      sx={{
        flexGrow: 1,
        bgcolor: "#121b2d",
        p: 2,
        border: "1px solid rgba(255,255,255,0.2)",
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
      id="skills"
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
        Skills
      </Typography>
      <AnimatedDivider />
      <Box
        sx={{
          py: 2,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
          maxWidth: "90ch",
        }}
      >
        {skills.map((skill) => SkillCard(skill))}
      </Box>
    </Box>
  );
};

export default Skills;
