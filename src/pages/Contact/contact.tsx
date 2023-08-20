import { Box, Grid, Paper, Typography } from "@mui/material"
import { BsTelephonePlus} from "react-icons/bs";
import { MdAlternateEmail} from "react-icons/md";
import { HiOutlineLocationMarker} from "react-icons/hi";
import "./contact.scss";
const Contact = ()=>{
return <Box>

<Box sx={{ flexGrow: 1 }} mt={5}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <Box component={Paper} elevation={5} p={5} className="bounce-paper">


<Box display="flex">

<BsTelephonePlus size={30} color="green"/>
<Typography variant="h6" ml={1} color="orange">Call Us</Typography>
</Box>

<Typography variant="h6">+94 779538686</Typography>
<Typography variant="h6">+94 713223554 (Gamini)</Typography>

<Typography variant="h6">+94 776944998 (Rashmi)</Typography>

</Box>
        </Grid>
      
        <Grid item xs={12} md={4}>
        <Box component={Paper} elevation={5} p={5} className="bounce-paper">
        <Box display="flex">

        <MdAlternateEmail size={30}/>
<Typography variant="h6" ml={1} color="orange">Mail Us</Typography>
    </Box>
       

        <Typography variant="h6">@meemurevillagecamping.com </Typography>
</Box>
        </Grid>
        <Grid item xs={12} md={4}>
        <Box component={Paper} elevation={5} p={5} className="bounce-paper">
            <Box display="flex">

        <HiOutlineLocationMarker size={30} color="red"/>
        <Typography variant="h6" ml={1} color="orange">Reach Us</Typography>
            </Box>
        
        <Typography variant="h6"> No 55, kahatagaha kumbure gedara, meemure, Hunnasgiriya, Sri Lanka</Typography>
</Box>
        </Grid>
      </Grid>
    </Box>


    <Typography>

Follow us
Stay up to date with our latest adventures, tips and stories by following us on Instagram, Facebook and Tiktok (@MeemureVillageCamping).
Join us to celebrate the harmony of nature and culture while camping at Meemure Village - every journey begins with an extraordinary step.
    </Typography>
</Box>
}

export default Contact