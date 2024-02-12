import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import SevenWaterFall from "../../accets//Images/7waterfall/7waterfall.jpg";
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
            <img src={Climbing} alt="Image1" height="250" />

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
                A daring dance with nature's symphony. As gravity's grip tugs at
                your adventurous spirit, each step echoes with the rhythm of
                rushing water. With every ascent, the cascade becomes your
                canvas, its misty veil a partner in this vertical waltz.
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
                Begin your aqueous adventure in the heart of Meemure village,
                where the allure of cascading waterfalls beckons. Here, embark
                on a journey where every step leads you deeper into the embrace
                of nature's aqueous wonders.
              </Typography>
            </Grid>
            <img src={SevenWaterFall} alt="Image2" height="251" />
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
            <img src={Hikking} alt="Image3" height="250" />
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
                Commence on a thrilling expedition through the rugged Nakles
                Mountain Range in Meemure, where every step is a testament to
                nature's majesty.
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
                Experience the enchantment of night camping amidst the mystical
                wilderness of Meemure. As the sun dips below the horizon, the
                world transforms into a canvas of starlit wonder.
              </Typography>
            </Grid>
            <img src={Night} alt="Image4" height="250" />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Adventure;
