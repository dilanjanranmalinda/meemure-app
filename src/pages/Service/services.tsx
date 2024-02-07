import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { AiOutlineSafety } from "react-icons/ai";
import { FaUserShield, FaRegLightbulb } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <Card>
        <Box display="flex" alignItems="center" mb={2}>
          <AiOutlineSafety size={30} color="lightgreen" />
          <Typography variant="h6" ml={1} color="orange">
            Guidance
          </Typography>
          <Typography variant="body1" ml={1} color="#37B5B6">
            We have experienced guides with 10 years of expertise.
          </Typography>
        </Box>
      </Card>

      <Box display="flex" alignItems="center" mb={2}>
        <FaUserShield size={30} color="lightblue" />
        <Typography variant="h6" ml={1} color="orange">
          Safety
        </Typography>
        <Typography variant="body1" ml={1} color="#37B5B6">
          Your safety is our top priority. We adhere to strict safety measures
          to ensure a secure adventure experience.
        </Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <FaRegLightbulb size={30} color="yellow" />
        <Typography variant="h6" ml={1} color="orange">
          Skills
        </Typography>
        <Typography variant="body1" ml={1} color="#37B5B6">
          Our skilled team is equipped with the latest techniques and knowledge
          to make your adventure unforgettable.
        </Typography>
      </Box>
    </div>
  );
};

export default Services;
