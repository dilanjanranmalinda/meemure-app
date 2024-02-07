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
import About from "../../pages/About/about";
import Contact from "../../pages/Contact/contact";
import { TEXT_COLOR } from "../../accets/app-constants";
import Footer from "../../components/footer/footer";
import { Container, Paper } from "@mui/material";
import Adventure from "../../pages/Adventure/adventure";
import Services from "../../pages/Service/services";

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
            <Typography
              variant="h2"
              className="title"
              textAlign="center"
              color="white"
            >
              Meemure Village Camping Site
            </Typography>
            <Typography variant="h4" textAlign="center" color="white">
              "Discover the Beauty of Nature"
            </Typography>
          </Box>
        </Grid>
        <Grid container justifyContent="center" mt={5}>
          <Grid item>
            <IconButton aria-label="youtube" href="#">
              <FaYoutube size={30} color={TEXT_COLOR} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="facebook" href="#">
              <GrFacebookOption
                color={TEXT_COLOR}
                style={{ fontSize: "2rem" }}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="tiktok" href="#">
              <FaTiktok color={TEXT_COLOR} size={30} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="instagram" href="#">
              <GrInstagram size={30} color={TEXT_COLOR} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" mt={5}>
          <Slideshow />
        </Grid>
        <Grid container spacing={2} mt={10}>
          <Grid container spacing={2} mx={{ xs: 4, md: 10 }}>
            <Grid item xs={12} id="packages">
              <Typography variant="h3" color={TEXT_COLOR}>
                Packages
              </Typography>
              <Packages />
            </Grid>

            <Grid item xs={12} id="packages">
              <Adventure />
            </Grid>

            <Grid item xs={12} id="booking" mt={5}>
              <Typography variant="h3" color={TEXT_COLOR}>
                Booking
              </Typography>
              <Booking />
            </Grid>

            <Grid item xs={12} id="booking" mt={5}>
              <Services />
            </Grid>

            <Paper className="footer" data-background-color="black" id="footer">
              <Grid item xs={12} id="about" mt={5}>
                <Typography variant="h3" color={TEXT_COLOR}>
                  About
                </Typography>
                <About />
              </Grid>
              <Grid item xs={12} id="contact" mt={5}>
                <Typography variant="h3" color={TEXT_COLOR}>
                  Contact
                </Typography>
                <Contact />
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={5} id="contact">
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
