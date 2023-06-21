import React, { useState } from "react";
import "./packages.scss";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

import sample1 from "../../accets/sample1.jpg";
import sample2 from "../../accets/sample2.jpg";
import sample3 from "../../accets/sample3.jpg";
import sample4 from "../../accets/sample4.jpg";
import ModalComponent from "../../components/Modal/ModalCompoent";

export interface PackageProps {
  title: string;
  foriegn: PaxProps;
  local: PaxProps;
  additional: string[];
  description: string;
  items: string[];
  images: {
    src: any;
    alt: string;
    caption: string;
  }[];
}

interface PaxProps {
  price: string;
  items: string[];
}

const packages = [
  {
    title: "One Day",
    foriegn: { price: "$50.00", items: ["45% discount for 5-10 pax"] },
    local: {
      price: "Rs.2800.00",
      items: [
        "5% discount for 5-10 pax",
        "Guide free",
        "Rs.2600.00 discount price for 10 or more",
      ],
    },
    additional: [
      "Guide price Rs.3000",
      "Rs.2500, Speacial Discount for Students more tha 10 pax",
      "Note that transportation cost maybe vary, so follow the instructions on the booking to manage those",
    ],
    description: "This pack includes,",
    items: [
      "Breakfast",
      "Lunch",
      "Evening Tea (with traditional sweets)",
      "Traditional Food (Wali thalapa/Kithul Pani/Kithul thalapa)",
    ],
    images: [
      {
        src: sample4,
        alt: "WorldEnd and Elli 7",
        caption: "Example image 1 caption",
      },
      {
        src: sample3,
        alt: "Wedi Lunu Guhawa",
        caption: "Example image 2 caption",
      },
      {
        src: sample2,
        alt: "Suriya Arana Ella",
        caption: "Example image 3 caption",
      },
      {
        src: sample1,
        alt: "Meemure Eli 7",
        caption: "Example image 4 caption",
      },
    ],
  },
  {
    title: "Two Days",
    foriegn: { price: "$50.00", items: ["45% discount for 5-10 pax"] },
    local: {
      price: "Rs.2800.00",
      items: [
        "5% discount for 5-10 pax",
        "Guide free",
        "Rs.2600.00 discount price for 10 or more",
      ],
    },
    additional: [
      "Guide price Rs.3000",
      "Rs.2500, Speacial Discount for Students more tha 10 pax",
      "Note that transportation cost maybe vary, so follow the instructions on the booking to manage those",
    ],

    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    items: ["Item 1", "Item 2", "Item 3"],
    images: [
      {
        src: sample4,
        alt: "Example image 1",
        caption: "Example image 1 caption",
      },
      {
        src: sample3,
        alt: "Example image 2",
        caption: "Example image 2 caption",
      },
      {
        src: sample2,
        alt: "Example image 3",
        caption: "Example image 3 caption",
      },
      {
        src: sample1,
        alt: "Example image 4",
        caption: "Example image 4 caption",
      },
    ],
  },
  {
    title: "Three days",
    foriegn: { price: "$50.00", items: ["45% discount for 5-10 pax"] },
    local: {
      price: "Rs.2800.00",
      items: [
        "5% discount for 5-10 pax",
        "Guide free",
        "Rs.2600.00 discount price for 10 or more",
      ],
    },
    additional: [
      "Guide price Rs.3000",
      "Rs.2500, Speacial Discount for Students more tha 10 pax",
      "Note that transportation cost maybe vary, so follow the instructions on the booking to manage those",
    ],

    description: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    items: ["Item 1", "Item 2", "Item 3"],
    images: [
      {
        src: sample4,
        alt: "Example image 1",
        caption: "Example image 1 caption",
      },
      {
        src: sample3,
        alt: "Example image 2",
        caption: "Example image 2 caption",
      },
      {
        src: sample2,
        alt: "Example image 3",
        caption: "Example image 3 caption",
      },
      {
        src: sample1,
        alt: "Example image 4",
        caption: "Example image 4 caption",
      },
    ],
  },
];

const Package: React.FC<PackageProps> = (packages) => {
  const { title, foriegn, local, description, items } = packages;

  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={12} sm={4}>
      <Paper className="packages-root">
        <Typography variant="h6" className="title">
          {title}
        </Typography>
        <Divider />
        <Box mt={2}>
          <Typography variant="body1">{description}</Typography>
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
          <Box display="flex" alignItems="center">
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", marginRight: 4 }}
            >
              Foreign Price:
            </Typography>
            <Typography variant="h5" className="price">
              {foriegn.price}
            </Typography>
            <Typography variant="subtitle1" ml={1}>
              (Per person)
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", marginRight: 4 }}
            >
              Local Price:
            </Typography>
            <Typography variant="h5" className="price">
              {local.price}
            </Typography>
            <Typography variant="subtitle1" ml={1}>
              (Per person)
            </Typography>
          </Box>
          <Box textAlign="right">
            <Button
              variant="text"
              color="success"
              onClick={() => setOpen(true)}
            >
              Read more
            </Button>
          </Box>
        </Box>
      </Paper>
      <ModalComponent open={open} packages={packages} onClose={handleClose} />
    </Grid>
  );
};

const Packages = () => {
  return (
    <Box mt={4}>
      <Grid container spacing={4}>
        {packages.map((pkg, index) => (
          <Package key={index} {...pkg} />
        ))}
      </Grid>
    </Box>
  );
};

export default Packages;
