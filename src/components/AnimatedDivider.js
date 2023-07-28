import { Box } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const AnimatedDivider = () => {
  return (
    <Box
      sx={{
        bgcolor: "rgba(114, 226, 174, 0.4)",
        height: "6px",
        width: "100px",
        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      <Box
        component={motion.div}
        initial={{ x: -12, borderRadius: "25%" }}
        animate={{ x: [-12, 100, -12], borderRadius: "25%" }}
        transition={{
          duration: 2,
          ease: "circInOut",
          times: 1,
          repeat: Infinity,
        }}
        sx={{
          bgcolor: "#72E2AE",
          height: "6px",
          width: "12px",
        }}
      />
    </Box>
  );
};

export default AnimatedDivider;
