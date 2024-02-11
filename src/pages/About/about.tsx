import { Grid, Typography } from "@mui/material";
import { TEXT_COLOR } from "../../accets/app-constants";
import "./about.scss";
const About = () => {
  return (
    <Grid container spacing={2} p={4}>
      <Typography color={TEXT_COLOR} mt={5} align="center" variant="h5">
        “Meemure”
      </Typography>
      <Grid item xs={12} display="flex" flexDirection="row" gap={2}>
        <Grid item xs={6} className="about-image-1"></Grid>
        <Grid item xs={6}>
          <Typography
            color={TEXT_COLOR}
            sx={{ textIndent: 20 }}
            mt={2}
            textAlign="justify"
            p={1}
            align="center"
          >
            Welcome to “Meemure Village Camping Site” Meemure is a sanctuary of
            natural wonder and cultural discovery nestled in the heart of Sri
            Lanka. Since our inception, we have been on a mission to reveal the
            magic of Meemure Village to adventurers and explorers seeking an
            authentic connection to the world around them. Our Meemure Village
            Camping was born in 2015. Not as a business but as a service. Having
            been loved by the people for 8 years, this journey is with the
            desire to preserve the beauty and traditions of Meemure, a secluded
            haven hidden in the lush landscape of Sri Lanka. Camping at Meemure
            Village is not just about pitching a tent – it is an immersive
            experience that invites you to escape the chaos of your modern life.
            Surrounded by lush mountains and meandering rivers, our site serves
            as a gateway to a simple existence, attuned to the rhythms of
            nature. join us As we enter another chapter of camping at Meemure
            Village, we invite you to be a part of this wonderful journey.
            Disconnect from the digital world, connect with fellow adventurers,
            and rediscover the serenity that only nature can provide. Book your
            stay today and be a part of the Meemure story.
          </Typography>
        </Grid>
      </Grid>
      <Typography color={TEXT_COLOR} mt={5} align="center" variant="h5">
        “Camping”
      </Typography>
      <Grid item xs={12} display="flex" flexDirection="row" gap={2}>
        <Grid item xs={6}>
          <Typography
            color={TEXT_COLOR}
            sx={{ textIndent: 20 }}
            mt={2}
            textAlign="justify"
            p={1}
            align="center"
          >
            Welcome to “Meemure Village Camping Site” Meemure is a sanctuary of
            natural wonder and cultural discovery nestled in the heart of Sri
            Lanka. Since our inception, we have been on a mission to reveal the
            magic of Meemure Village to adventurers and explorers seeking an
            authentic connection to the world around them. Our Meemure Village
            Camping was born in 2015. Not as a business but as a service. Having
            been loved by the people for 8 years, this journey is with the
            desire to preserve the beauty and traditions of Meemure, a secluded
            haven hidden in the lush landscape of Sri Lanka. Camping at Meemure
            Village is not just about pitching a tent – it is an immersive
            experience that invites you to escape the chaos of your modern life.
            Surrounded by lush mountains and meandering rivers, our site serves
            as a gateway to a simple existence, attuned to the rhythms of
            nature. join us As we enter another chapter of camping at Meemure
            Village, we invite you to be a part of this wonderful journey.
            Disconnect from the digital world, connect with fellow adventurers,
            and rediscover the serenity that only nature can provide. Book your
            stay today and be a part of the Meemure story.
          </Typography>
        </Grid>
        <Grid item xs={6} className="about-image-2"></Grid>
      </Grid>
      <Typography color={TEXT_COLOR} mt={5} align="center" variant="h5">
        “Meemure Village Camping Site”
      </Typography>
      <Grid item xs={12} display="flex" flexDirection="row" gap={2}>
        <Grid item xs={6} className="about-image-3"></Grid>
        <Grid item xs={6}>
          <Typography
            color={TEXT_COLOR}
            sx={{ textIndent: 20 }}
            mt={2}
            textAlign="justify"
            p={1}
            align="center"
          >
            Welcome to “Meemure Village Camping Site” Meemure is a sanctuary of
            natural wonder and cultural discovery nestled in the heart of Sri
            Lanka. Since our inception, we have been on a mission to reveal the
            magic of Meemure Village to adventurers and explorers seeking an
            authentic connection to the world around them. Our Meemure Village
            Camping was born in 2015. Not as a business but as a service. Having
            been loved by the people for 8 years, this journey is with the
            desire to preserve the beauty and traditions of Meemure, a secluded
            haven hidden in the lush landscape of Sri Lanka. Camping at Meemure
            Village is not just about pitching a tent – it is an immersive
            experience that invites you to escape the chaos of your modern life.
            Surrounded by lush mountains and meandering rivers, our site serves
            as a gateway to a simple existence, attuned to the rhythms of
            nature. join us As we enter another chapter of camping at Meemure
            Village, we invite you to be a part of this wonderful journey.
            Disconnect from the digital world, connect with fellow adventurers,
            and rediscover the serenity that only nature can provide. Book your
            stay today and be a part of the Meemure story.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
