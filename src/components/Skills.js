import { Typography, Box, Paper } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const SkillsList = [
  "C#",
  "HTML",
  "CSS",
  "Git",
  "JavaScript",
  "React",
  "UI/UX Design",
  "VR/XR",
];

const SkillItem = (props) => {
  const { sx, ...other } = props;
  return (
    <Paper
      component={motion.div}
      whileHover={{ scale: 1.04 }}
      sx={{
        p: 2,
        bgcolor: "#1D2430",
        color: "white",
        flexShrink: 0,
        margin: 1,
        borderRadius: 4,
      }}
      {...other}
    />
  );
};

const Skills = () => {
  return (
    <Box sx={{ py: 2 }}>
      <Typography
        sx={{
          color: "#FFFFFF",
          fontWeight: "Bold",
          typography: { xs: "h5", sm: "h4" },
          textAlign: "center",
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
        }}
      >
        {SkillsList.map((text) => (
          <SkillItem>{text}</SkillItem>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
