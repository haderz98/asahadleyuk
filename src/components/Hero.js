import { Box, Typography } from "@mui/material";
import React from "react";
import ProfilePicture from "../images/avatar.png";
import { motion } from "framer-motion";
import AnimatedAvatar from "./AnimatedAvatar";
import TypingProfession from "./TypingProfession";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <Box
      id="home"
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
        background:
          "repeating-linear-gradient(90deg,rgba(255,255,255,0.025), rgba(255,255,255,0.025) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(0deg,rgba(255,255,255,0.025), rgba(255,255,255,0.025) 1px, transparent 1px, transparent 30px)",
      }}
    >
      <AnimatedAvatar image={ProfilePicture} />
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
          fontFamily: "Radio Canada, sans-serif",
          fontSize: { xs: "2.5rem", sm: "3rem" },
          fontWeight: "700",
          color: "#72E2AE",
        }}
      >
        Hi, I'm Asa Hadley
        <TypingProfession />
      </Box>
      <Typography
        component={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        sx={{
          fontFamily: "Radio Canada, sans-serif",
          fontSize: { xs: "1.1rem", sm: "1.2rem" },
          fontWeight: "400",
          color: "#bfbecb",
          maxWidth: "85ch",
        }}
      >
        Experienced software developer with 4+ years in the industry. Proficient
        in multiple languages, specializing in immersive gaming, VR, and dynamic
        web solutions
      </Typography>
      <SocialLinks />
    </Box>
  );
};

export default Hero;
