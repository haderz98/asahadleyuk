import { Typography, Grid, Card, Avatar, Paper, Stack } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import TalkoutLogo from "../images/to.png";
import VrssLogo from "../images/vrss.png";

const Experience = () => {
  return (
    <Grid spacing={4} container>
      <Grid item xs={12}>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: "Bold",
            typography: { xs: "h5", sm: "h4" },
            textAlign: "center",
          }}
        >
          Experience
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          sx={{ minHeight: 300 }}
        >
          <Stack
            spacing={2}
            sx={{ textAlign: "center", alignItems: "center", p: 2 }}
          >
            <Avatar src={TalkoutLogo} sx={{ width: 80, height: 80 }}></Avatar>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Talkout
            </Typography>
            <Typography variant="body" sx={{ textAlign: "left" }}>
              • Worked as part of a small team to develop a VR content delivery
              platform for the Pico Neo 3 VR headset.
              <br />• Developed a VR Fire Extinguisher Safety training module
              for UK Fire Group.
              <br />• Worked with Halfords to recreate their eMobility/eBike
              training in a virtual reality environment.
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          sx={{ minHeight: 300 }}
        >
          <Stack
            spacing={2}
            sx={{ textAlign: "center", alignItems: "center", p: 2 }}
          >
            <Avatar src={VrssLogo} sx={{ width: 80, height: 80 }}></Avatar>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Virtual Reality Simulation Systems
            </Typography>
            <Typography variant="body" sx={{ textAlign: "left" }}>
              • Developed virtual reality 360 tours for the University of
              Wolverhampton, Great Western Railway and the Martin James
              Foundation.
              <br />• Created a Stop and Search training experience for GWENT
              Police Constabulary.
            </Typography>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Experience;
