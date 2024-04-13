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
import Adventure from "../../pages/Adventure/adventure";
import Services from "../../pages/Service/services";
import OurLocation from "../../pages/location/OurLocation";

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
            <IconButton
              aria-label="youtube"
              href="https://youtube.com/@meemurevillage9573?si=DgCpWNXr0OFHDnVr"
              target="_blank"
            >
              <FaYoutube size={30} color={TEXT_COLOR} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="facebook"
              href="https://www.facebook.com/MeemureVillageCamping?mibextid=LQQJ4d"
              target="_blank"
            >
              <GrFacebookOption
                color={TEXT_COLOR}
                style={{ fontSize: "2rem" }}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="tiktok"
              href="https://www.tiktok.com/@meemure_village?_t=8lUOfonVTMm&_r=1"
              target="_blank"
            >
              <FaTiktok color={TEXT_COLOR} size={30} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="instagram"
              href="https://www.instagram.com/meemure_village_srilanka?igsh=MTI3OWZyNWV4cDliNQ%3D%3D&utm_source=qr"
              target="_blank"
            >
              <GrInstagram size={30} color={TEXT_COLOR} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" mt={5}>
          <Slideshow />
        </Grid>
        <Grid container spacing={2} mt={10}>
          <Grid container spacing={0} mx={{ xs: 4, md: 10 }}>
            <Grid item xs={12} id="packages">
              <Typography variant="h3" color={TEXT_COLOR}>
                Packages
              </Typography>
              <Packages />
            </Grid>

            <Grid item xs={12} mt={5}>
              <Adventure />
            </Grid>

            <Grid item xs={12} id="booking" mt={5}>
              <Typography variant="h3" color={TEXT_COLOR}>
                Booking
              </Typography>
              <Booking />
            </Grid>
            <Grid item xs={12} mt={5}>
              <Services />
            </Grid>
            <Grid item xs={12} id="about" mt={5}>
              <Typography mb={5} variant="h3" color={TEXT_COLOR}>
                Location
              </Typography>

              <OurLocation />
            </Grid>
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
