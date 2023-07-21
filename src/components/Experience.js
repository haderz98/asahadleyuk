import {
  Typography,
  Grid,
  Box,
  Avatar,
  Paper,
  Stack,
  styled,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import TalkoutLogo from "../images/to.png";
import VrssLogo from "../images/vrss.png";

const CompanyLogo = styled(Avatar)(() => ({
  width: 80,
  height: 80,
  boxShadow: "0.1px 0.1px 20px #000000",
}));

const Experience = () => {
  return (
    <>
      <Box sx={{ py: 2 }}>
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
        <Grid spacing={2} container sx={{ py: 2 }}>
          <Grid item xs={12} sm={6}>
            <Paper
              component={motion.div}
              whileHover={{ scale: 1.015 }}
              sx={{ minHeight: 400, bgcolor: "#1D2430", p: 2, borderRadius: 4 }}
            >
              <Stack
                spacing={2}
                sx={{ textAlign: "center", alignItems: "center" }}
              >
                <CompanyLogo src={TalkoutLogo}></CompanyLogo>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  Talkout
                </Typography>
                <Typography
                  variant="body"
                  sx={{ textAlign: "left", color: "white" }}
                >
                  • Worked as part of a small team to develop a VR content
                  delivery platform for the Pico Neo 3 VR headset.
                  <br />
                  <br />• Developed a VR Fire Extinguisher Safety training
                  module for UK Fire Group.
                  <br />
                  <br />• Worked with Halfords to recreate their eMobility/eBike
                  training in a virtual reality environment.
                </Typography>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              component={motion.div}
              whileHover={{ scale: 1.015 }}
              sx={{ minHeight: 400, bgcolor: "#1D2430", p: 2, borderRadius: 4 }}
            >
              <Stack
                spacing={2}
                sx={{ textAlign: "center", alignItems: "center" }}
              >
                <CompanyLogo src={VrssLogo}></CompanyLogo>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  Virtual Reality Simulation Systems
                </Typography>
                <Typography
                  variant="body"
                  sx={{ textAlign: "left", color: "white" }}
                >
                  • Developed virtual reality 360 tours for the University of
                  Wolverhampton, Great Western Railway and the Martin James
                  Foundation.
                  <br />
                  <br />• Created a Stop and Search training experience for
                  GWENT Police Constabulary.
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Experience;
