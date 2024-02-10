import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import worldend from "../../accets//Images/Miniworldend/worldend.jpg";
import SevenWaterFall from "../../accets//Images/7waterfall/7waterfall.jpg";
import Hikking from "../../accets//Images/Lakegala/Hiking1.jpg";
import Climbing from "../../accets//Images/Lakegala/climbing.jpg";
import Night from "../../accets//Images/Lakegala/Night.jpg";
import "./adventure.scss";

const Adventure = () => {
  return (
    <div className="img-hover-zoom">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        style={{ marginTop: "15%" }}
      >
        <Typography
          variant="h4"
          className="title"
          textAlign="center"
          color="#37B5B6"
        >
          Most populer adventues for you
        </Typography>
        <Typography variant="h5" textAlign="center" color="#323232">
          "Embark on an adventure into the heart of Meemure,
        </Typography>
        <Typography variant="h5" textAlign="center" color="#323232">
          where every trail tells a tale,
        </Typography>
        <Typography variant="h5" textAlign="center" color="#323232">
          and every step leads to a new discovery.
        </Typography>
        <Typography variant="h5" textAlign="center" color="#323232">
          Amidst the lush forests and winding rivers,{" "}
        </Typography>{" "}
        <Typography variant="h5" textAlign="center" color="#323232">
          find the thrill of exploration and the joy of connection with nature's
          wonders."
        </Typography>
      </Box>

      <Box display="flex" flexDirection="row" alignItems="center" marginTop={2}>
        <Card style={{ width: "20rem", margin: "5px" }}>
          <img src={Climbing} alt="Image" height="250" />

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            style={{ color: "#ffff" }}
          >
            Waterfall Climbing
          </Typography>
        </Card>

        <Card style={{ width: "20rem", margin: "5px" }}>
          <img src={SevenWaterFall} alt="Image" height="250" />

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            style={{ color: "#ffff" }}
          >
            Water Activity
          </Typography>
        </Card>

        <Card
          style={{
            width: "20rem",
            margin: "5px",
            height: "300",
            maxWidth: "350",
          }}
        >
          <img src={Hikking} alt="Image" height="250" width="350" />

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            style={{ color: "#ffff" }}
          >
            Hiking
          </Typography>
        </Card>

        <Card style={{ width: "20rem", margin: "5px" }}>
          <img src={Night} alt="Image" height="250" />

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            style={{ color: "#ffff" }}
          >
            Night Camping
          </Typography>
        </Card>
      </Box>
    </div>
  );
};

export default Adventure;
