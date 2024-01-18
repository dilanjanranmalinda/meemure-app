import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "./modal-place-slider.scss";

const ModalPlaceSlider = ({ images }: any) => {
  return (
    <Grid item>
      <Box m="0" width="100%">
        <Carousel
          verticalSwipe="standard"
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={500}
        >
          {images?.map((image: any, index: any) => (
            <Box key={index}>
              <Grid container>
                <div className="place-wrapper">
                  <div className="text-overlay-place">
                    <div>
                      <Typography variant="h2" fontWeight={600}>
                        {image.alt}
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {image.caption}
                      </Typography>
                    </div>
                  </div>

                  <Card>
                    <CardMedia
                      component="img"
                      height={image.width}
                      image={image.src}
                      title={image.alt}
                    />
                  </Card>
                </div>
              </Grid>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Grid>
  );
};

export default ModalPlaceSlider;
