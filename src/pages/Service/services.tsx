import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { AiOutlineSafety } from "react-icons/ai";
import { FaUserShield, FaRegLightbulb } from "react-icons/fa";
import { CARD_COLOR } from "../../accets/app-constants";

const Services = () => {
  return (
    <div>
      <Box display="flex" flexDirection="row" alignItems="center" marginTop={2}>
        <Card style={{ width: "25rem", margin: "20px", color: CARD_COLOR }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "15%" }}
          >
            <AiOutlineSafety size={60} color="lightgreen" />
            <Typography variant="h6" color="orange">
              Guidance
            </Typography>
            <Typography variant="body1" color="#37B5B6">
              We have experienced guides with 15 years of expertise. and they
              responsible for everithings.
            </Typography>
          </Box>
        </Card>

        <Card style={{ width: "25rem", margin: "20px" }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "15%" }}
          >
            <FaUserShield size={60} color="lightblue" />
            <Typography variant="h6" ml={1} color="orange">
              Safety
            </Typography>
            <Typography variant="body1" color="#37B5B6">
              Your safety is our top priority. We adhere to strict safety to
              secure adventure experience.
            </Typography>
          </Box>
        </Card>

        <Card style={{ width: "25rem", margin: "20px" }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "15%" }}
          >
            <FaRegLightbulb size={60} color="yellow" />
            <Typography variant="h6" color="orange">
              Skills
            </Typography>
            <Typography variant="body1" color="#37B5B6">
              Our skilled team is equipped with the latest techniques to make
              your adventure unforgettable.
            </Typography>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default Services;
