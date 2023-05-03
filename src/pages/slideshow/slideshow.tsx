import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slideshow.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { FaYoutube } from "react-icons/fa";

interface Video {
  id: string;
  title: string;
  description: string;
}

const Slideshow: React.FC = () => {
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

  return (
    <Box m="0" width="98%">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={500}
      >
        {videos.map(({ id, title, description }) => (
          <Box key={id}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box className="videoWrapper">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <Typography variant="h4" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body1">{description}</Typography>
                  <IconButton
                    href={`https://www.youtube.com/watch?v=${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="watch on YouTube"
                  >
                    <FaYoutube />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slideshow;
