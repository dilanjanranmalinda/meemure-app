import React from "react";
import { Card, CardContent, Typography, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { makeStyles } from "@mui/styles";

const data = {
  bookingCount: 70,
  cancelCount: 20,
  bookingPlaces: 90
};

const useStyles = makeStyles(() => ({
  card: {
    minWidth: 200,
    margin: "16px",
    padding: "16px",
    textAlign: "center"
  },
  table: {
    minWidth: 650,
  },
}));

const AdminDashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" px={5}>
      <Grid item>
        <Card className={classes.card} style={{backgroundColor:"brown"}}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Booking Count
            </Typography>
            <Typography variant="h4">
              {data.bookingCount}%
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Cancel Count
            </Typography>
            <Typography variant="h4">
              {data.cancelCount}%
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Booking Places
            </Typography>
            <Typography variant="h4">
              {data.bookingPlaces}%
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}> 
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Booking Details
            </Typography>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">Package</TableCell>
                    <TableCell align="right">Place</TableCell>
                    <TableCell align="right">From</TableCell>
                    <TableCell align="right">Pax</TableCell>
                    <TableCell align="right">Transportation</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Map over your booking data and render each row */}
                  {/* Example:
                  {bookingData.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>{booking.name}</TableCell>
                      <TableCell align="right">{booking.address}</TableCell>
                      <TableCell align="right">{booking.email}</TableCell>
                      <TableCell align="right">{booking.phone}</TableCell>
                      <TableCell align="right">{booking.package}</TableCell>
                      <TableCell align="right">{booking.place}</TableCell>
                      <TableCell align="right">{booking.from}</TableCell>
                      <TableCell align="right">{booking.pax}</TableCell>
                      <TableCell align="right">{booking.transportation ? 'Yes' : 'No'}</TableCell>
                    </TableRow>
                  ))}
                  */}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AdminDashboard;
