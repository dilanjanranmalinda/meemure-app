import React, { useState } from "react";
import { TextField, Button, Card, CardHeader, CardContent, CardActions, Typography, Container,Theme} from "@mui/material";
import { makeStyles } from '@mui/styles';

import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  card: {
    maxWidth: 400,
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const AdminLogin: React.FC = () => {
    const classes: Record<string, string> = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission (e.g., login request)
    console.log("Email:", email);
    console.log("Password:", password);
    // Redirect to a different route after successful login
    navigate("/admin/dashboard"); // Change "/admin/dashboard" to the appropriate route
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="Admin Login" />
        <CardContent>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </form>
        </CardContent>
        <CardActions>
          <Typography variant="body2">
            Don't have an account? <Button color="primary" onClick={() => navigate("/admin/signup")}>Sign Up</Button>
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}

export default AdminLogin;
