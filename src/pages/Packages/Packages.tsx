import React, { useState } from "react";
import "./packages.scss";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ModalComponent from "../../components/Modal/ModalCompoent";
import { TEXT_COLOR } from "../../accets/app-constants";
import { packages } from "./packages.constant";

export interface PackageProps {
  index: number;
  title: string;
  foriegn: PaxProps;
  local: PaxProps;
  additional: string[];
  description: string;
  frontDescription: string;
  items: string[];
  places: {
    src: any;
    alt: string;
    caption: string;
  }[];
  additionalPlaces: {
    src: any;
    alt: string;
    caption: string;
  }[];
}

interface PaxProps {
  price: string;
  items: string[];
}

const Package: React.FC<PackageProps> = (packages) => {
  const { title, frontDescription, index } = packages;

  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={12} md={4}>
      <div className={`package-cover-image-${index}`}>
        <Typography
          variant="h6"
          fontWeight={600}
          color="white"
          sx={{
            width: "fit-content",
            px: 2,
            backgroundColor: "blueviolet",
            borderRadius: 20,
          }}
        >
          {title}
        </Typography>

        <Grid
          container
          direction="row"
          alignItems="flex-end"
          textAlign="center"
          px={5}
          pt={3}
          pb={1}
          sx={{ backgroundColor: "white", borderRadius: 20 }}
          component={Paper}
          mt="80%"
        >
          <Typography variant="body1" color={TEXT_COLOR}>
            {frontDescription}
          </Typography>

          <Box textAlign="right" width="100%">
            <Button
              variant="text"
              sx={{ border: "2px dashed red", borderRadius: 30 }}
              color="error"
              onClick={() => setOpen(true)}
            >
              Read more
            </Button>
          </Box>
        </Grid>
      </div>

      <ModalComponent open={open} packages={packages} onClose={handleClose} />
    </Grid>
  );
};

const Packages = () => {
  return (
    <Box mt={4}>
      <Grid container spacing={4}>
        {packages.map((pkg, index) => (
          <Package key={index} index={index} {...pkg} />
        ))}
      </Grid>
    </Box>
  );
};

export default Packages;
