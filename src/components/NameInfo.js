import { Box, Typography, Stack } from "@mui/material";
import React from "react";

const NameInfo = () => {
  return (
    <div>
      <Box sx={{ justifyContent: "center", my: 2 }}>
        <Stack
          spacing={2}
          sx={{
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ textAlign: "center", color: "#FFFFFF", fontWeight: "Bold" }}
            variant="h3"
          >
            Hi, I'm Asa Hadley
          </Typography>
          <Typography
            sx={{ textAlign: "center", color: "#FFFFFF", fontWeight: "Bold" }}
            variant="h4"
          >
            Software Developer
          </Typography>
          <Typography
            sx={{ textAlign: "left", color: "#FFFFFF", maxWidth: "75%" }}
          >
            I am software engineer with over 3 years’ C# experience. Hard
            working and keen to learn, I always want to grow and improve my
            skills. A passion for technology drives me to experiment with new
            programming languages, software and hardware.
          </Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default NameInfo;
