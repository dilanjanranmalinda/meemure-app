import React from "react";
import { TextField, Button, Card, CardHeader, CardContent, Grid, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    padding: "16px",
    background: "linear-gradient(to right, #3f51b5, #2196f3)",
    backgroundImage: "url('https://i.ibb.co/qFPRKrH/IMG-9564.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  card: {
    maxWidth: 300,
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)",
    zIndex: 1,
  },
  media: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.3,
    zIndex: 0,
  },
}));

const AdminLogin: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission (e.g., login request)
    console.log("Login button clicked");
    // Redirect to a different route after successful login
    navigate("/admin/dashboard"); // Change "/admin/dashboard" to the appropriate route
  };

  return (
    <div className={classes.root}>
      {/* <CardMedia
        component="img"
        src="https://i.ibb.co/5BmD9pr/IMG-9875.jpg"
        alt="Admin login background image"
        className={classes.media}
      /> */}
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Card className={classes.card}>
            <CardHeader title="Admin Login" />
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  type="email"
                  required
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Password"
                  type="password"
                  required
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminLogin;
