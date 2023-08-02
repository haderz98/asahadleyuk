import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = (logo, name, description, skills) => {
  return (
    <Box
      component={motion.div}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 2,
        bgcolor: "#121b2d",
        p: 2,
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "8px",
        minHeight: "460px",
      }}
    >
      <Avatar
        src={logo}
        sx={{
          width: "80px",
          height: "80px",
          border: "2px solid #72E2AE",
        }}
      />
      <Typography
        sx={{
          fontFamily: "Radio Canada, sans-serif",
          fontSize: "1.5rem",
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
      <Box
        sx={{
          display: "inline-flex",
          gap: 2,
        }}
      >
        {skills.map((skill) => (
          <Typography
            sx={{
              fontFamily: "Radio Canada, sans-serif",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#72E2AE",
            }}
          >
            {skill}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ExperienceCard;
