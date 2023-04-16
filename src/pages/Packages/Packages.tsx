import React from "react";
import {
  makeStyles,
  Grid,
  Box,
  Typography,
  Paper,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: theme.spacing(4),
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0px 0px 20px 0px #00ffff",
    },
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: "2rem",
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
      fontSize: "1.2rem",
      color: theme.palette.primary.main,
    },
  },
}));

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
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4}>
      <Paper className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Divider />
        <Box mt={2}>
          <Typography variant="h4" className={classes.price}>
            <Typography variant="h4" className={classes.price}>
              {foriegnPrice}
            </Typography>
          </Typography>
          <Typography variant="h4" className={classes.price}>
            {localPrice}
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <Box mt={2}>
            {items.map((item, index) => (
              <div key={index} className={classes.item}>
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
  const classes = useStyles();

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
