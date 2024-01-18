import { Grid } from "@mui/material";
import Foriegn from "./Foriegn";
import Local from "./Local";
import Additional from "./Additional";

const ModalSidebar = ({ foriegn, local, additional }: any) => {
  return (
    <Grid container flexDirection="column" spacing={1}>
      <Grid item xs={12}>
        <Foriegn {...{ foriegn }} />
      </Grid>
      <Grid item xs={12}>
        <Local local={local} />
      </Grid>
      <Grid item xs={12}>
        <Additional additional={additional} />
      </Grid>
    </Grid>
  );
};

export default ModalSidebar;
