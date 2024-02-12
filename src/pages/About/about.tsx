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
            Discover the hidden gem of Meemure Village, nestled deep within the
            breathtaking Knuckles Mountain Range of Sri Lanka. Remote and
            pristine, this village is a sanctuary for those seeking an authentic
            escape into nature's embrace. With just 420 residents, Meemure
            remains a secluded paradise, untouched by the hustle and bustle of
            modern life. Accessed only via a rugged 14 km trail from the town of
            Loolwatte, Meemure presents a journey filled with both challenge and
            reward. As you navigate the winding path through dense forests and
            cascading waterfalls, the anticipation of what lies ahead only
            heightens the sense of adventure. Upon arrival, immerse yourself in
            the rich tapestry of Meemure's culture and heritage. Engage with the
            warm-hearted locals, whose hospitality knows no bounds, and witness
            traditional practices that have stood the test of time. But it is
            nature herself that steals the spotlight in Meemure. Towering peaks,
            lush valleys, and pristine rivers paint a landscape of unparalleled
            beauty. Whether you're a seasoned trekker, a wildlife enthusiast, or
            simply a lover of the great outdoors, Meemure offers endless
            opportunities for exploration and discovery. So come, venture into
            the heart of this remote paradise and let the wonders of Meemure
            Village awaken your senses to a world of natural splendor and
            cultural richness.
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
            Camping experience in the heart of Meemure, where culinary delights
            and traditional flavors await to tantalize your taste buds. Settle
            into your cozy campsite nestled amidst the verdant surroundings of
            the Knuckles Mountain Range, where the scent of nature mingles with
            the aroma of delicious meals being prepared. As the sun sets and the
            stars begin to twinkle overhead, gather around the crackling
            campfire to indulge in a feast fit for royalty. Delight in a
            culinary journey showcasing a fusion of delectable delicacies and
            authentic Sri Lankan cuisine, lovingly prepared by local chefs using
            age-old recipes passed down through generations. Savor the rich
            flavors of traditional rice and curry, bursting with spices and
            aromatics that reflect the vibrant culture of Meemure. Sample
            mouthwatering dishes such as hoppers, string hoppers, and roti, each
            offering a unique taste of Sri Lanka's culinary heritage.
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
