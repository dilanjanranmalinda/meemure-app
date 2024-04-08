import React from "react";
import { TextField, Button, Card, CardHeader, CardContent, CardActions, Typography, Grid, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    padding: "16px", // Change to your preferred spacing
    background: "linear-gradient(to right, #3f51b5, #2196f3)",
  },
  card: {
    maxWidth: 400,
    padding: "16px", // Change to your preferred spacing
    borderRadius: "8px", // Change to your preferred border radius
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)", // Change to your preferred box shadow
  },
  media: {
    height: 200,
    backgroundSize: "contain",
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
    <Grid container justifyContent="center" alignItems="center" className={classes.root}>
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
          <CardActions>
            <Typography variant="body2">
              Don't have an account? <Button color="primary">Sign Up</Button>
            </Typography>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <CardMedia
          component="img"
          src="https://via.rabbit.com/400x200" // Add your image URL here
          alt="Admin login image"
          className={classes.media}
        />
      </Grid>
    </Grid>
  );
}

export default AdminLogin;
