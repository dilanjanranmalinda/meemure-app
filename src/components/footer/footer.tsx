import { Paper, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Paper
      square
      sx={{ padding: 1, display: "flex", justifyContent: "center" }}
    >
      <Typography variant="caption">
        All Rights Reserved &copy; MeemureCamping - {new Date().getFullYear()}
      </Typography>
    </Paper>
  );
};

export default Footer;
