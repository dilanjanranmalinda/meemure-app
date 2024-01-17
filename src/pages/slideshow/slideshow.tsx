import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slideshow.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player";
import { Typography } from "@mui/material";
import { videos } from "./slidshow.constant";

const Slideshow: React.FC = () => {
  return (
    <Box m="0" width="100%">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={500}
      >
        {videos.map(({ title, description, video }, index) => (
          <Box key={index}>
            <Grid container>
              <div className="videoWrapper">
                <div className="gradient-overlay-left">
                  <div className="textOverlay">
                    <Typography variant="h4" fontWeight={600}>
                      {title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {description}
                    </Typography>
                  </div>
                </div>

                <ReactPlayer
                  // playing
                  loop
                  url={video}
                  muted
                  width="210vh"
                  height="120vh"
                />
              </div>
            </Grid>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slideshow;
