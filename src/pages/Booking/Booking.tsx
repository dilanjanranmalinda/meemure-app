import React from "react";
import { Box, Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import BookingCalendar from "../../components/bookingCalender/BookingCalender";
import BookingForm from "../../components/bookingForm/bookingForm";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0px 0px 15px rgba(0, 0, 255, 0.2)",
    },
  },
  calendar: {
    width: "100%",
    border: "none",
    "& .react-calendar__tile--active": {
      background: "rgba(0, 0, 255, 0.2)",
    },
  },
}));

const Booking = () => {
  const classes = useStyles();
  const [date, setDate] = React.useState(new Date());

  const handleDateChange = (date: React.SetStateAction<Date>) => {
    setDate(date);
  };

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
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
          <Paper className={classes.paper}>
            <BookingForm />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Booking;
