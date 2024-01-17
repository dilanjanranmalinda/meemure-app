import { Typography } from "@mui/material";
import { TEXT_COLOR } from "../../accets/app-constants";

const About = () => {
  return (
    <div>
      <Typography
        color={TEXT_COLOR}
        sx={{ textIndent: 20 }}
        mt={2}
        textAlign="justify"
      >
        Welcome to “Meemure Village Camping” Meemure is a sanctuary of natural
        wonder and cultural discovery nestled in the heart of Sri Lanka. Since
        our inception, we have been on a mission to reveal the magic of Meemure
        Village to adventurers and explorers seeking an authentic connection to
        the world around them. Our Meemure Village Camping was born in 2015. Not
        as a business but as a service. Having been loved by the people for 8
        years, this journey is with the desire to preserve the beauty and
        traditions of Meemure, a secluded haven hidden in the lush landscape of
        Sri Lanka. Camping at Meemure Village is not just about pitching a tent
        – it is an immersive experience that invites you to escape the chaos of
        your modern life. Surrounded by lush mountains and meandering rivers,
        our site serves as a gateway to a simple existence, attuned to the
        rhythms of nature. join us As we enter another chapter of camping at
        Meemure Village, we invite you to be a part of this wonderful journey.
        Disconnect from the digital world, connect with fellow adventurers, and
        rediscover the serenity that only nature can provide. Book your stay
        today and be a part of the Meemure story.
      </Typography>
    </div>
  );
};

export default About;
