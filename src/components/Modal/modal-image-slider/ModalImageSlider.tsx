import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "./modal-image-slider.scss";

const ModalImageSlider = ({ images }: any) => {
  return (
    <Grid item>
      <Box m="0" width="100%">
        <Carousel
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
                <div className="image-wrapper">
                  <div className="gradient-overlay-left">
                    <div className="text-overlay">
                      <Typography variant="h4" fontWeight={600}>
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

export default ModalImageSlider;
