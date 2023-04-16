import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Box,
  Grid,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { YouTube } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  videoWrapper: {
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
    overflow: "hidden",
    "& iframe": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "none",
    },
  },
}));

interface Video {
  id: string;
  title: string;
  description: string;
}

const Slideshow: React.FC = () => {
  const classes = useStyles();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    // fetch video data from YouTube API
    const fetchVideos = async () => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCegr9HFHMctsVe2cFGZarmQ&maxResults=10&key=AIzaSyAOo_pt_BOfk-Q-A7CAUZWu2ERrsTGqn5w`
      );
      const data = await res.json();
      const items = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
      }));
      setVideos(items);
    };
    fetchVideos();
  }, []);

  console.log("videos", videos);

  return (
    <Box style={{ marginTop: "2%", marginBottom: "2%" }}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={500}
      >
        {videos.map((video) => (
          <div key={video.id}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box className={classes.videoWrapper}>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <Typography variant="h4" gutterBottom>
                    {video.title}
                  </Typography>
                  <Typography variant="body1">{video.description}</Typography>
                  <IconButton
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="watch on YouTube"
                  >
                    <YouTube />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slideshow;
