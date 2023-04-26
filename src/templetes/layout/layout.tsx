import Booking from "../../pages/Booking/Booking";
import Slideshow from "../../pages/slideshow/slideshow";
import Packages from "../../pages/Packages/Packages";
import SandBox from "../../components/sandbox";
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
                    <FaYoutube size={30} />
                  </a>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="facebook">
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <GrFacebookOption style={{ fontSize: "2rem" }} />
                  </a>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="facebook">
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <FaTiktok size={30} />
                    {/* <img src={tiktok} width="32px" height="32px" /> */}
                  </a>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="facebook">
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <GrInstagram size={30} />
                  </a>
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid container style={{ margin: "20px 20px" }}>
          <Grid item xs={12}>
            {/* <Slideshow /> */}
          </Grid>

          <Grid item xs={12} id="packages">
            <h1>Packages</h1>

            <Packages />
          </Grid>

          <Grid item xs={12} id="booking">
            <h1>Booking</h1>
            {/* <Booking /> */}
          </Grid>

          <Grid item xs={12} id="contact">
            <h1>Contact</h1>
          </Grid>

          <Grid item xs={12} id="about">
            <h1>About</h1>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
