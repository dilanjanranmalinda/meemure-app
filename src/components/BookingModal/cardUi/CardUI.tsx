import React, { useState, useRef } from "react";
import Card from "react-credit-cards";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./Utils";
import "react-credit-cards/es/styles-compiled.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const CardUI: React.FC<any> = ({ handleClose }: any) => {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleCallback = ({ issuer }: { issuer: string }, isValid: boolean) => {
    if (isValid) {
      setState({ ...state, issuer });
    }
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setState({ ...state, focused: e.target.name });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "number") {
      e.target.value = formatCreditCardNumber(value);
    } else if (name === "expiry") {
      e.target.value = formatExpirationDate(value);
    } else if (name === "cvc") {
      e.target.value = formatCVC(value);
    }

    setState({ ...state, [name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("You have finished payment!");
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const { name, number, expiry, cvc, focused, issuer } = state;

  return (
    <Box key="Payment" px={3} pb={2}>
      <Grid container gap={2} className="App-payment">
        <Typography variant="h4">Enter your payment details</Typography>
        <Typography variant="subtitle1">
          Please input your information below
        </Typography>
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused as any}
          callback={handleCallback}
        />
        <form ref={formRef} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                type="text"
                name="name"
                label="Name on card"
                variant="outlined"
                placeholder="Name"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="tel"
                name="number"
                label="Card Number"
                variant="outlined"
                placeholder="Card Number"
                inputProps={{
                  pattern: "[\\d ]{16,22}",
                  maxLength: 19,
                }}
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="tel"
                name="expiry"
                label="Expiration Date"
                variant="outlined"
                placeholder="Valid Thru"
                inputProps={{ pattern: "\\d\\d/\\d\\d" }}
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="tel"
                name="cvc"
                label="CVC"
                variant="outlined"
                placeholder="CVC"
                inputProps={{ pattern: "\\d{3}" }}
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Grid>
          </Grid>
          <input type="hidden" name="issuer" value={issuer} />
          <Grid container spacing={2} my={2}>
            <Grid item>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button disabled type="submit" variant="contained">
                Submit (coming soon)
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Box>
  );
};

export default CardUI;
