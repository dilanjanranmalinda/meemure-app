import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  toolbar: {
    display: "flex",
    justifyContent: "center",
  },

  drawer: {
    width: 200,
  },
  drawerPaper: {
    width: 200,
  },
  navLink: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    margin: "0 30px",
    padding: "2px 10px",
    borderRadius: "20px",
    color: "#fff",
    textDecoration: "none",
    marginRight: theme.spacing(2),
    "&:hover": {
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navLinks = [
    { title: "Home", target: "navbar" },
    { title: "Packages", target: "packages" },
    { title: "Booking", target: "booking" },
    { title: "Contact", target: "contact" },
    { title: "About", target: "about" },
  ];

  const navLinksMarkup = navLinks.map((navLink) => (
    <Link
      key={navLink.title}
      activeClass="active"
      to={navLink.target}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className={classes.navLink}
    >
      {navLink.title}
    </Link>
  ));

  const drawerMarkup = (
    <div
      className={classes.drawer}
      onClick={() => toggleDrawer()}
      onKeyDown={() => toggleDrawer()}
    >
      <List>
        {navLinks.map((navLink) => (
          <ListItem button key={navLink.title}>
            <Link
              activeClass="active"
              to={navLink.target}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={classes.navLink}
            >
              <ListItemText primary={navLink.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          {navLinksMarkup}
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={() => toggleDrawer()}
        classes={{ paper: classes.drawerPaper }}
      >
        {drawerMarkup}
      </Drawer>
    </div>
  );
}

export default Navbar;
