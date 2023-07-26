import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#0B1223",
          borderBottom: 1,
          borderBottomColor: "#242A39",
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
            AH.
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
