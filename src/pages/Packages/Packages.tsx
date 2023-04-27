import React from "react";
import "./packages.scss";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

interface PackageProps {
  title: string;
  foriegnPrice: string;
  localPrice: string;
  description: string;
  items: string[];
}

const Package: React.FC<PackageProps> = ({
  title,
  foriegnPrice,
  localPrice,
  description,
  items,
}) => {
  return (
    <Grid item xs={12} sm={4}>
      <Paper className="packages-root">
        <Typography variant="h6" className="title">
          {title}
        </Typography>
        <Divider />
        <Box mt={2}>
          <Typography variant="h4" className="price">
            {foriegnPrice}
          </Typography>
          <Typography variant="h4" className="price">
            {localPrice}
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <Box mt={2}>
            {items.map((item, index) => (
              <div key={index} className="item">
                <Typography variant="body2">{item}</Typography>
              </div>
            ))}
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

const Packages = () => {
  const packages = [
    {
      title: "One Day",
      foriegnPrice: "Per person $50.00",
      localPrice: "Per person Rs.2800.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      items: ["Item 1", "Item 2", "Item 3"],
    },
    {
      title: "Two Days",
      foriegnPrice: "Per person $80.00",
      localPrice: "Per person Rs.5000.00",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      items: ["Item 1", "Item 2", "Item 3"],
    },
    {
      title: "Three days",
      foriegnPrice: "Per person $100.00",
      localPrice: "Per person Rs.7500.00",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus.",
      items: ["Item 1", "Item 2", "Item 3"],
    },
  ];

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
