import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slideshow.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player";
import { Paper, Typography } from "@mui/material";
import { videos } from "./slidshow.constant";
import { TEXT_COLOR } from "../../accets/app-constants";

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
                <div className="textOverlay">
                  <Paper
                    sx={{
                      px: 5,
                      pt: 1,
                      backgroundColor: "white",
                      borderRadius: 20,
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight={600}
                      color={TEXT_COLOR}
                    >
                      {title}
                    </Typography>
                    <Typography
                      pb={1}
                      variant="body1"
                      paragraph
                      color={TEXT_COLOR}
                    >
                      {description}
                    </Typography>
                  </Paper>
                </div>

                <ReactPlayer
                  playing
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
