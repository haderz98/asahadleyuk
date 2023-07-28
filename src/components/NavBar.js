import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
  Drawer,
  IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";

const navItems = ["home", "skills", "experience", "work"];

const NavBar = (props) => {
  const [scrollState, setScrollState] = useState(false);
  const { windowProp } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const logo = (
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
  );

  const navmenu = (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        textAlign: "center",
      }}
    >
      {navItems.map((item) => (
        <Box sx={{ display: "flex", textAlign: "center" }}>
          <Button
            key={item}
            onClick={(e) => {
              let section = document.getElementById(item);
              e.preventDefault();
              section && section.scrollIntoView({ behavior: "smooth" });
            }}
            sx={{
              my: 2,
              color: "white",
              display: "block",
              fontFamily: "Radio Canada, sans-serif",
              fontSize: "0.9rem",
              fontWeight: "500",
              ":hover": {
                color: "#72E2AE",
              },
            }}
          >
            {item}
          </Button>
        </Box>
      ))}
    </Box>
  );

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      {logo}
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={(e) => {
                let section = document.getElementById(item);
                e.preventDefault();
                section && section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <ListItemText
                primary={item}
                sx={{
                  fontFamily: "Radio Canada, sans-serif",
                  fontSize: "1rem",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const navButton = (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{
        display: { xs: "flex", md: "none" },
        color: "#0F172A",
        bgcolor: "#72E2AE",
        ":hover": {
          bgcolor: "white",
        },
        borderRadius: "8px",
      }}
    >
      <MenuIcon />
    </IconButton>
  );

  const container =
    windowProp !== undefined ? () => windowProp().document.body : undefined;

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
          backdropFilter: scrollState ? "blur(20px)" : "",
          borderBottom: scrollState ? 1 : 0,
          borderBottomColor: "rgba(255,255,255,0.1)",
          boxShadow: scrollState ? 1 : 0,
        }}
      >
        <Toolbar
          sx={{
            mx: { xs: 0, sm: "10%", lg: "20%" },
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {logo}
          {navmenu}
          <Button
            variant="contained"
            sx={{
              display: { xs: "none", md: "block" },
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
          {navButton}
        </Toolbar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
                bgcolor: "#121B2D",
                color: "white",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </AppBar>
    </Box>
  );
};

export default NavBar;
