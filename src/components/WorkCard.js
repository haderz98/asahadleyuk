import React from "react";
import VideoPlayer from "./VideoPlayer";
import WorkInfoPopup from "./WorkInfoPopup";
import { motion } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";

const WorkCard = (vidUrl, name, description) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
          minHeight: "280px",
        }}
      >
        <VideoPlayer url={vidUrl} />
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
        <Button
          onClick={handleClickOpen}
          sx={{
            fontFamily: "Radio Canada, sans-serif",
            fontSize: "0.8rem",
            fontWeight: "500",
            color: "#0F172A",
            bgcolor: "#72E2AE",
            ":hover": {
              bgcolor: "white",
            },
          }}
        >
          More Info
        </Button>
      </Box>
      {open && (
        <WorkInfoPopup
          open={open}
          handleClose={handleClose}
          title={name}
          content={description}
        />
      )}
    </div>
  );
};

export default WorkCard;
