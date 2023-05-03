import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import "./modal-component.scss";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { AiFillCloseCircle } from "react-icons/ai";
import { PackageProps } from "../../pages/Packages/Packages";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";

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
    >
      <Fade in={open}>
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <IconButton onClick={onClose}>
              <AiFillCloseCircle />
            </IconButton>
          </Box>

          <Typography variant="body1" paragraph>
            {description}
          </Typography>
          <List>
            {items.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primaryTypographyProps={{
                    component: "span",
                    style: { fontWeight: "bold" },
                  }}
                  primary={`\u2022 ${item}`}
                />
              </ListItem>
            ))}
          </List>
          <Typography fontWeight="300" variant="h6" gutterBottom>
            You can select any one of these remarkable places
          </Typography>
          <Grid container spacing={2}>
            {images?.map((image: any, index: any) => (
              <Grid key={index} item xs={12} md={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={image.src}
                    title={image.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {image.alt}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {image.caption}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={1} mt={5}>
            <Grid item xs={12} sm={6}>
              <Paper className="packages-root">
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "bold",
                    width: "50vh",
                  }}
                >
                  Foreign
                </Typography>
                <List>
                  {foriegn.items.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primaryTypographyProps={{
                          component: "span",
                          style: { fontWeight: "bold" },
                        }}
                        primary={`\u2022 ${item}`}
                      />
                    </ListItem>
                  ))}
                </List>
                <Box display="flex">
                  <Typography variant="h5" className="price">
                    {foriegn.price}
                  </Typography>
                  <Typography variant="subtitle1" ml={1}>
                    (Per person)
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className="packages-root">
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "bold",
                    width: "50vh",
                  }}
                >
                  Local
                </Typography>
                <List>
                  {local.items.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primaryTypographyProps={{
                          component: "span",
                          style: { fontWeight: "bold" },
                        }}
                        primary={`\u2022 ${item}`}
                      />
                    </ListItem>
                  ))}
                </List>
                <Box display="flex">
                  <Typography variant="h5" className="price">
                    {local.price}
                  </Typography>
                  <Typography variant="subtitle1" ml={1}>
                    (Per person)
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Typography variant="body1" style={{ marginTop: 24 }}>
            Additional Information:
          </Typography>
          <List>
            {additional.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primaryTypographyProps={{
                    component: "span",
                  }}
                  primary={`\u2022 ${item}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
