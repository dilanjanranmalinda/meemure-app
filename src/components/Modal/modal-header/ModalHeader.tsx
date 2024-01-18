import { Grid, IconButton, Typography } from "@mui/material";
import { AiFillCloseCircle } from "react-icons/ai";
import { TEXT_COLOR } from "../../../accets/app-constants";

const ModalHeader = ({ title, onClose }: any) => {
  return (
    <Grid
      item
      xs={12}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h3" gutterBottom color={TEXT_COLOR}>
        {title}
      </Typography>
      <IconButton color="error" onClick={onClose} sx={{ mt: -8, mr: -3 }}>
        <AiFillCloseCircle size={40} />
      </IconButton>
    </Grid>
  );
};

export default ModalHeader;
