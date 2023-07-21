import { Box, Typography, Stack } from "@mui/material";
import React from "react";

const NameInfo = () => {
  return (
    <div>
      <Box sx={{ my: 4 }}>
        <Stack
          spacing={4}
          sx={{
            alignItems: { xs: "left", sm: "center" },
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "Bold",
              typography: { xs: "h4", sm: "h2", md: "h2" },
            }}
          >
            Hi, I'm Asa Hadley
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "Bold",
              typography: { xs: "h5", sm: "h4" },
            }}
          >
            a Software Developer.
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              maxWidth: 700,
            }}
          >
            I am a dedicated software developer with over 3 years of hands-on
            experience in C#. I possess a strong work ethic and an insatiable
            desire to expand my knowledge and enhance my skills.
          </Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default NameInfo;
