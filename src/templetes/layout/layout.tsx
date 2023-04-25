import Grid from "@material-ui/core/Grid";
import Navbar from "../../components/navbar/navbar";
import tiktok from "../../accets/tiktok.svg";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Facebook, Instagram, YouTube } from "@material-ui/icons";
import Booking from "../../pages/Booking/Booking";
import Slideshow from "../../pages/slideshow/slideshow";
import Packages from "../../pages/Packages/Packages";

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
            <Typography variant="h2" className="title">
              Meemure Village
            </Typography>
            <Typography variant="h4" className="slogan">
              "Discover the Beauty of Nature"
            </Typography>

            <Grid
              container
              justifyContent="center"
              style={{ marginTop: "10%" }}
            >
              <Grid item>
                <IconButton aria-label="youtube">
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <YouTube style={{ fontSize: "2rem" }} />
                  </a>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="facebook">
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Facebook style={{ fontSize: "2rem" }} />
                  </a>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="facebook">
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <img src={tiktok} width="32px" height="32px" />
                  </a>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="facebook">
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Instagram style={{ fontSize: "2rem" }} />
                  </a>
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid container style={{ margin: "20px 20px" }}>
          {/* slidshow */}
          <Grid item xs={12}>
            {/* <Slideshow /> */}
          </Grid>

          {/* Packages */}
          <Grid item xs={12} id="packages">
            <Packages />
          </Grid>

          {/* Booking */}
          <Grid item xs={12} id="booking">
            <Booking />
          </Grid>

          {/* Contact */}
          <Grid item xs={12} id="contact">
            {/* <Contact /> */}
            <h1>Contact</h1>
          </Grid>

          {/* About */}
          <Grid item xs={12} id="about">
            {/* <About /> */}
            <h1>About</h1>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
