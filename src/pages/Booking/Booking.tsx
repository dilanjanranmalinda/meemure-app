import React from "react";
import BookingCalendar from "../../components/bookingCalender/BookingCalender";
import BookingForm from "../../components/bookingForm/bookingForm";
import "./booking.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Booking = () => {
  const [date, setDate] = React.useState<Date | null>(null);

  return (
    <Box className="booking-root">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper className="calendar">
            <Typography variant="h5" color="white">
              Booked Dates
            </Typography>
            <Box my={3}>
              <BookingCalendar {...{ setDate }} />
            </Box>
            <Typography variant="subtitle1">
              Today: {new Date().toDateString()}
            </Typography>
          </Paper>
          <Paper
            sx={{
              backgroundColor: date ? "orange" : "red",
              marginTop: 1,
              padding: 2,
            }}
          >
            {date ? (
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography color="blue">Check-in Date</Typography>
                <Typography variant="h4" fontWeight={500} ml={3}>
                  {date?.toDateString()}
                </Typography>
              </Box>
            ) : (
              <Typography>Noo</Typography>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="booking-paper">
            <Typography variant="h5" fontWeight={600}>
              Camping Application
            </Typography>
            <BookingForm {...{ date }} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Booking;
