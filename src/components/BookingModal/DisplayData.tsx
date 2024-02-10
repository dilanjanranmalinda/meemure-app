import { Paper, Typography, Grid, Button } from "@mui/material";

const DisplayData = ({ data, onCancel, onConfirm }: any) => {
  return (
    <>
      <Typography ml={3} variant="h5">
        Please Confirm your Booking details
      </Typography>
      <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">{data.name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Address: {data.address}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Email: {data.email}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Phone: {data.phone}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Package: {data.package}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">From: {data.from}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Pax: {data.pax}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              Transportation: {data.transportation ? "Yes" : "No"}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Place: {data.place}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              Check In: {new Date(data.checkIn).toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid container px={3} pb={2} justifyContent="space-between">
        <Button variant="contained" onClick={onCancel} color="error">
          Cancel
        </Button>
        <Button
          style={{ marginLeft: "10px" }}
          variant="contained"
          color="warning"
          onClick={onConfirm}
        >
          Confirm
        </Button>
      </Grid>
    </>
  );
};

export default DisplayData;
