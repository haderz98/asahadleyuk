import { Button, Stack } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";

const iconSize = 40;
const githubURL = "https://github.com/haderz98";
const linkedinURL = "https://www.linkedin.com/in/asa-hadley-530769143/";

const SocialButton = styled(Button)(({ theme }) => ({
  width: iconSize,
  height: iconSize,
  minWidth: iconSize,
  minHeight: iconSize,
  borderRadius: "50%",
  color: "#0F172A",
  backgroundColor: "#72E2AE",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
}));

const SocialLinks = () => {
  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Stack direction="row" spacing={2}>
      <SocialButton
        variant="contained"
        onClick={() => handleSocialClick(githubURL)}
      >
        <GitHub
          sx={{
            width: iconSize * 75 * 0.01,
            height: iconSize * 75 * 0.01,
          }}
        />
      </SocialButton>
      <SocialButton
        variant="contained"
        onClick={() => handleSocialClick(linkedinURL)}
      >
        <LinkedIn
          sx={{
            width: iconSize * 75 * 0.01,
            height: iconSize * 75 * 0.01,
          }}
        />
      </SocialButton>
    </Stack>
  );
};

export default SocialLinks;
