import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";

const WorkInfoPopup = (props) => {
  return (
    <div>
      <Dialog
        onClose={props.handleClose}
        open={props.open}
        sx={{ backdropFilter: "blur(10px)" }}
        PaperProps={{
          style: {
            borderRadius: "8px",
            backgroundColor: "#121B2D",
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
          },
        }}
      >
        <DialogTitle onClose={props.handleClose}>{props.title}</DialogTitle>
        <DialogContent dividers>
          {props.content.map((desc) => (
            <Typography
              gutterBottom
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
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={props.handleClose}
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
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WorkInfoPopup;
