import React from "react";
import BookingCalendar from "../../components/bookingCalender/BookingCalender";
import BookingForm from "../../components/bookingForm/bookingForm";
import "./booking.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Booking = () => {
  const [date, setDate] = React.useState(new Date());

  const handleDateChange = (date: React.SetStateAction<Date>) => {
    setDate(date);
  };

  return (
    <Box className="booking-root">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper className="calendar">
            <Typography variant="h5">Booked Dates</Typography>
            <Box my={3}>
              <BookingCalendar />
            </Box>
            <Typography variant="subtitle1">
              Today: {date.toDateString()}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="booking-paper">
            <Typography variant="h5">Camping Application</Typography>
            <BookingForm />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Booking;
