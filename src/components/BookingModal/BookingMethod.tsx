import { Button, DialogContent, Grid, Paper, Typography } from "@mui/material";
import { Fragment } from "react";

import "./booking-modal.scss";

export default function BookingMethod({ setChoice }: any) {
  return (
    <Fragment>
      <Grid
        container
        spacing={2}
        px={2}
        flexDirection="column"
        justifyContent="center"
      >
        <DialogContent>
          <Grid item xs={12} mb={2} textAlign="center">
            <Typography variant="h5" fontWeight={500}>
              {"Choose a Payment Method"}
            </Typography>
          </Grid>
          <Grid item display="flex" justifyContent="center" gap={2}>
            <Grid item xs={6} display="flex" justifyContent="center">
              <Paper
                component={Button}
                onClick={() => setChoice(1)}
                className="online-paper"
                elevation={5}
                sx={{
                  backgroundColor: "lightgreen",
                  py: 3,
                  px: 5,
                  textAlign: "center",
                  color: "black",
                }}
              >
                Online
              </Paper>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="center">
              <Paper
                component={Button}
                onClick={() => setChoice(2)}
                className="ofline-paper"
                elevation={5}
                sx={{
                  backgroundColor: "gray",
                  py: 3,
                  px: 5,
                  textAlign: "center",
                }}
              >
                Ofline
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
      </Grid>
    </Fragment>
  );
}
