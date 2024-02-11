import { Box, Card, Grid, Typography } from "@mui/material";
import { AiOutlineSafety } from "react-icons/ai";
import { FaUserShield, FaRegLightbulb } from "react-icons/fa";

const Services = () => {
  return (
    <Grid container spacing={4} pt={3}>
      <Grid item xs={4}>
        <Card
          elevation={5}
          style={{
            width: "100%",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={3}
          >
            <AiOutlineSafety size={60} />
            <Typography variant="h6">Guidance</Typography>
            <Typography variant="body1" p={1} align="center">
              We have experienced guides with 15 years of expertise. and they
              responsible for everithings.
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card
          elevation={5}
          style={{
            width: "100%",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={3}
          >
            <FaUserShield size={60} />
            <Typography variant="h6" ml={1}>
              Safety
            </Typography>
            <Typography variant="body1" p={1} align="center">
              Your safety is our top priority. We adhere to strict safety to
              secure adventure experience.
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card
          elevation={5}
          style={{
            width: "100%",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={3}
          >
            <FaRegLightbulb size={60} />
            <Typography variant="h6">Skills</Typography>
            <Typography variant="body1" p={1} align="center">
              Our skilled team is equipped with the latest techniques to make
              your adventure unforgettable.
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Services;
