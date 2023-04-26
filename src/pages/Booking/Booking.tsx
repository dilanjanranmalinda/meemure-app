import React from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import BookingCalendar from "../../components/bookingCalender/BookingCalender";
import BookingForm from "../../components/bookingForm/bookingForm";
import "./booking.scss";

const Booking = () => {
  const [date, setDate] = React.useState(new Date());

  const handleDateChange = (date: React.SetStateAction<Date>) => {
    setDate(date);
  };

  return (
    <Box className="booking-root">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className="paper">
            <Typography variant="h5">Choose a date</Typography>
            <Box my={3}>
              <BookingCalendar />
            </Box>
            <Typography variant="subtitle1">
              Selected date: {date.toDateString()}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="paper">
            <BookingForm />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Booking;
