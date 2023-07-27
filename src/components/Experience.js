import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import HeaderDivider from "./HeaderDivider";
import VRSS from "../images/vrss.png";
import Talkout from "../images/to.png";

const experience = [
  {
    logo: Talkout,
    name: "Talkout",
    description: [
      "• Worked as part of a small team to develop a VR content delivery platform for the Pico Neo 3 VR headset.",
      "• Developed a VR Fire Extinguisher Safety training module for UK Fire Group.",
      "• Worked with Halfords to recreate their eMobility/eBike training in a virtual reality environment.",
    ],
    skills: ["Unity3D", "C#", "Java", "Android Native"],
  },
  {
    logo: VRSS,
    name: "Virtual Reality Simulation Systems",
    description: [
      "• Developed virtual reality 360 tours for the University of Wolverhampton, Great Western Railway and the Martin James Foundation.",
      "• Created a Stop and Search training experience for GWENT Police Constabulary.",
    ],
    skills: ["Unity3D", "C#", "Xcode", "HTML", "CSS"],
  },
];

const ExperienceCard = (logo, name, description, skills) => {
  return (
    <Stack
      spacing={2}
      sx={{
        bgcolor: "#121b2d",
        p: 2,
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "8px",
        minHeight: "460px",
        alignItems: "center",
      }}
    >
      <Avatar
        src={logo}
        sx={{
          width: "80px",
          height: "80px",
          border: "2px solid #72E2AE",
        }}
      />
      <Typography
        sx={{
          fontFamily: "Radio Canada, sans-serif",
          fontSize: "2rem",
          fontWeight: "700",
          color: "white",
        }}
      >
        {name}
      </Typography>
      {description.map((desc) => (
        <Typography
          sx={{
            fontFamily: "Radio Canada, sans-serif",
            fontSize: "1.1rem",
            fontWeight: "400",
            color: "#bfbecb",
          }}
        >
          {desc}
        </Typography>
      ))}
      <Box
        sx={{
          display: "inline-flex",
          gap: 2,
        }}
      >
        {skills.map((skill) => (
          <Typography
            sx={{
              fontFamily: "Radio Canada, sans-serif",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#72E2AE",
            }}
          >
            {skill}
          </Typography>
        ))}
      </Box>
    </Stack>
  );
};

const Experience = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        px: 2,
        py: 10,
        textAlign: "center",
        background:
          "repeating-linear-gradient(90deg,rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, rgba(15,23,42,1) 1px, rgba(15,23,42,1) 12.5%)",
        flexShrink: 1,
      }}
    >
      <Typography
        sx={{
          flexGrow: 1,
          fontFamily: "Radio Canada, sans-serif",
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "white",
          textTransform: "uppercase",
        }}
      >
        Experience
      </Typography>
      <HeaderDivider />
      <Grid
        container
        sx={{
          py: 2,
          display: "flex",
          justifyContent: "center",
          maxWidth: "85ch",
        }}
        spacing={2}
      >
        {experience.map((exp) => (
          <Grid item xs={12} md={6}>
            {ExperienceCard(exp.logo, exp.name, exp.description, exp.skills)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;
