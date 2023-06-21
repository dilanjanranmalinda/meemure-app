import Booking from "../../pages/Booking/Booking";
import Slideshow from "../../pages/slideshow/slideshow";
import Packages from "../../pages/Packages/Packages";
import "./layout.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Navbar from "../../components/navbar/navbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { GrInstagram, GrFacebookOption } from "react-icons/gr";

function Layout() {
  return (
    <div className="root">
      <Grid container>
        <Grid container direction="column" className="background-image">
          <Box id="navbar">
            <Navbar />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            style={{ marginTop: "15%" }}
          >
            <Typography variant="h2" className="title" textAlign="center">
              Meemure Village Camping Site
            </Typography>
            <Typography variant="h4" textAlign="center">
              "Discover the Beauty of Nature"
            </Typography>

            <Grid
              container
              justifyContent="center"
              style={{ marginTop: "10%" }}
            >
              <Grid item>
                <IconButton aria-label="youtube" href="#">
                  <FaYoutube size={30} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="facebook" href="#">
                  <GrFacebookOption style={{ fontSize: "2rem" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="tiktok" href="#">
                  <FaTiktok size={30} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="instagram" href="#">
                  <GrInstagram size={30} />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid container spacing={2} mt={5}>
          <Grid item xs={12}>
            <Slideshow />
          </Grid>
          <Grid container spacing={2} mx={{ xs: 4, md: 10 }} mt={5}>
            <Grid item xs={12} id="packages">
              <Typography variant="h3">Packages</Typography>
              <Packages />
            </Grid>

            <Grid item xs={12} id="booking">
              <Typography variant="h3">Booking</Typography>
              <Booking />
            </Grid>

            <Grid item xs={12} id="contact">
              <h1>Contact</h1>
            </Grid>

            <Grid item xs={12} id="about">
              <h1>About</h1>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
