import React from "react";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";

const AnimatedAvatar = (props) => {
  return (
    <div>
      <Avatar
        component={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        src={props.image}
        sx={{
          width: { xs: "150px", sm: "200px" },
          height: { xs: "150px", sm: "200px" },
          border: "6px solid #72E2AE",
        }}
      />
    </div>
  );
};

export default AnimatedAvatar;
