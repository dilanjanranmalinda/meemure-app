import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../components/navbar/navbar";
import backgroundImage from "../../accets/navbarImage.jpg";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
    // fontSize: 48,
    marginLeft: "10%",
    marginBottom: theme.spacing(2),
  },
  slogan: {
    marginLeft: "13%",
    fontWeight: 400,
    // fontSize: 24,
    marginBottom: theme.spacing(4),
  },
}));

function Layout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid
          container
          direction="column"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "10% 25%",
            backgroundRepeat: "no-repeat",
            flex: 1,
            height: "80vh",
          }}
        >
          <Box>
            <Navbar />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            style={{ marginTop: "15%" }}
          >
            <Typography variant="h2" className={classes.title}>
              Your Website Title
            </Typography>
            <Typography variant="h4" className={classes.slogan}>
              Your Website Slogan Here
            </Typography>

            <Grid
              container
              justifyContent="center"
              spacing={2}
              style={{ marginTop: "10%" }}
            >
              <Grid item>
                <Typography variant="body1">Youtube link</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">Facebook link</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid container style={{ margin: "0 20px" }}>
          {/* Packages */}
          <Grid item xs={12}>
            {/* <Packages /> */}
            <h1>Packages</h1>
          </Grid>

          {/* Booking */}
          <Grid item xs={12}>
            {/* <Booking /> */}
            <h1>Booking</h1>
          </Grid>

          {/* Contact */}
          <Grid item xs={12}>
            {/* <Contact /> */}
            <h1>Contact</h1>
          </Grid>

          {/* About */}
          <Grid item xs={12}>
            {/* <About /> */}
            <h1>About</h1>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
