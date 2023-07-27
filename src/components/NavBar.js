import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      setScrollState(window.scrollY > 0);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "transparent",
          backdropFilter: "blur(20px)",
          borderBottom: scrollState ? 1 : 0,
          borderBottomColor: "rgba(255,255,255,0.1)",
          boxShadow: scrollState ? 1 : 0,
        }}
      >
        <Toolbar sx={{ mx: { xs: 0, sm: "10%", lg: "20%" } }}>
          <Typography
            sx={{
              flexGrow: 1,
              fontFamily: "Radio Canada, sans-serif",
              fontSize: "3rem",
              fontWeight: "600",
              color: "#72E2AE",
              textTransform: "uppercase",
            }}
          >
            AH
            <Typography
              sx={{
                display: "inline-block",
                fontFamily: "Radio Canada, sans-serif",
                fontSize: "3rem",
                fontWeight: "600",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              .
            </Typography>
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontFamily: "Radio Canada, sans-serif",
              fontSize: "1rem",
              fontWeight: "500",
              color: "#0F172A",
              bgcolor: "#72E2AE",
              ":hover": {
                bgcolor: "white",
              },
            }}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
