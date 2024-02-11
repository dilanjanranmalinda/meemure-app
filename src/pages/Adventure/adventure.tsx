import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, Paper } from "@mui/material";
import worldend from "../../accets//Images/Miniworldend/worldend.jpg";
import SevenWaterFall from "../../accets//Images/7waterfall/7waterfall.JPG";
import Hikking from "../../accets//Images/Lakegala/Hiking1.jpg";
import Climbing from "../../accets//Images/Lakegala/climbing.jpg";
import Night from "../../accets//Images/Lakegala/Night.jpg";
import "./adventure.scss";
import { TEXT_COLOR } from "../../accets/app-constants";

const Adventure = () => {
  return (
    <Grid container justifyContent="center" spacing={1} p={4}>
      <Grid
        item
        display="flex"
        textAlign="center"
        flexDirection="column"
        justifyContent="center"
        gap={1}
      >
        <Typography
          variant="h3"
          width="100%"
          borderBottom={2}
          pb={1}
          mb={2}
          fontWeight={400}
          color="#37B5B6"
        >
          Most populer adventues for you
        </Typography>

        <Typography
          className="custom-border-slogan"
          variant="h6"
          textAlign="center"
          color={TEXT_COLOR}
        >
          "Embark on an adventure into the heart of Meemure, where every trail
          tells a tale, and every step leads to a new discovery. Amidst the lush
          forests and winding rivers, find the thrill of exploration and the joy
          of connection with nature's wonders."
        </Typography>
      </Grid>

      <Grid container flexDirection="column" marginTop={2} spacing={2} px={4}>
        <Grid item>
          <Card
            style={{
              width: "100%",
              display: "flex",
              backgroundColor: "white",
            }}
            elevation={3}
            className="zoom-adventures"
          >
            <img src={Climbing} alt="Image" height="250" />

            <Grid
              item
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={2}
              px={5}
            >
              <Typography
                variant="h4"
                align="center"
                style={{ color: TEXT_COLOR }}
                fontWeight={500}
              >
                Waterfall Climbing
              </Typography>
              <Typography
                variant="h6"
                align="center"
                style={{ color: TEXT_COLOR }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                quaerat facere vitae eligendi, cumque assumenda accusantium
                repudiandae facilis sequi sunt culpa dignissimos pariatur rem
                illum quidem ipsam modi laboriosam totam.
              </Typography>
            </Grid>
          </Card>
        </Grid>
        <Grid item>
          <Card
            style={{
              width: "100%",
              display: "flex",
              backgroundColor: "white",
            }}
            elevation={3}
            className="zoom-adventures"
          >
            <Grid
              item
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={2}
              px={5}
            >
              <Typography
                variant="h4"
                align="center"
                style={{ color: TEXT_COLOR }}
                fontWeight={500}
              >
                Water Activity
              </Typography>
              <Typography
                variant="h6"
                align="center"
                style={{ color: TEXT_COLOR }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                quaerat facere vitae eligendi, cumque assumenda accusantium
                repudiandae facilis sequi sunt culpa dignissimos pariatur rem
                illum quidem ipsam modi laboriosam totam.
              </Typography>
            </Grid>
            <img src={SevenWaterFall} alt="Image" height="251" />
          </Card>
        </Grid>
        <Grid item>
          <Card
            style={{
              width: "100%",
              display: "flex",
              backgroundColor: "white",
            }}
            elevation={3}
            className="zoom-adventures"
          >
            <img src={Hikking} alt="Image" height="250" />
            <Grid
              item
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={2}
              px={5}
            >
              <Typography
                variant="h4"
                align="center"
                style={{ color: TEXT_COLOR }}
                fontWeight={500}
              >
                Hiking
              </Typography>
              <Typography
                variant="h6"
                align="center"
                style={{ color: TEXT_COLOR }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                quaerat facere vitae eligendi, cumque assumenda accusantium
                repudiandae facilis sequi sunt culpa dignissimos pariatur rem
                illum quidem ipsam modi laboriosam totam.
              </Typography>
            </Grid>
          </Card>
        </Grid>
        <Grid item>
          <Card
            style={{
              width: "100%",
              display: "flex",
              backgroundColor: "white",
            }}
            elevation={3}
            className="zoom-adventures"
          >
            <Grid
              item
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={2}
              px={5}
            >
              <Typography
                variant="h4"
                align="center"
                style={{ color: TEXT_COLOR }}
                fontWeight={500}
              >
                Night Camping
              </Typography>
              <Typography
                variant="h6"
                align="center"
                style={{ color: TEXT_COLOR }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                quaerat facere vitae eligendi, cumque assumenda accusantium
                repudiandae facilis sequi sunt culpa dignissimos pariatur rem
                illum quidem ipsam modi laboriosam totam.
              </Typography>
            </Grid>
            <img src={Night} alt="Image" height="250" />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Adventure;
