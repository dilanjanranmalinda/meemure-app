import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import "./modal-component.scss";
import { PackageProps } from "../../pages/Packages/Packages";
import Paper from "@mui/material/Paper";
import ModalHeader from "./modal-header/ModalHeader";
import ModalImageSlider from "./modal-image-slider/ModalImageSlider";
import ModalDesc from "./modal-desc/ModalDesc";
import ModalSidebar from "./modal-sidebar/ModalSidebar";
import ModalPlaceSlider from "./modal-place-slider/ModalPlaceSlider";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  packages: PackageProps;
}

const ModalComponent = ({ open, onClose, packages }: ModalProps) => {
  const { title, additional, foriegn, local, items, images, description } =
    packages;

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      disableScrollLock
      className="modal-component"
      sx={{ m: 0, p: 0 }}
    >
      <Fade in={open}>
        <Grid container gap={1} sx={{ backgroundColor: "white", p: 3 }}>
          <ModalHeader {...{ title, onClose }} />
          <Grid container>
            <Grid sm={8} p={2} gap={2} display="flex" flexDirection="column">
              <ModalImageSlider {...{ images }} />
              <ModalDesc {...{ description, items }} />
              <Grid
                item
                xs={12}
                component={Paper}
                pt={2}
                sx={{ backgroundColor: "coral" }}
              >
                <Typography fontWeight="600" variant="h6" px={2} gutterBottom>
                  You can also select any one of these additional places
                </Typography>
                <ModalPlaceSlider {...{ images }} />
              </Grid>
            </Grid>
            <Grid item sm={4} pt={2}>
              <ModalSidebar {...{ foriegn, local, additional }} />
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
