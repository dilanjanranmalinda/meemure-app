import { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "@mui/material/Drawer";

function Navbar() {
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
      className="navLink"
    >
      {navLink.title}
    </Link>
  ));

  const drawerMarkup = (
    <div
      className="drawer"
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
              className="navLink"
            >
              <ListItemText primary={navLink.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="navbar-root">
      <AppBar position="fixed" className="appBar">
        <Toolbar className="toolbar">
          <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer()}
          >
            <AiOutlineMenu />
          </IconButton>
          {navLinksMarkup}
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={() => toggleDrawer()}
        classes={{ paper: "drawerPaper" }}
      >
        {drawerMarkup}
      </Drawer>
    </div>
  );
}

export default Navbar;
