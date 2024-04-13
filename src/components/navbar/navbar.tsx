import { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Avatar, Grid, useScrollTrigger } from "@mui/material";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navLinks = [
    { title: "Home", target: "navbar" },
    { title: "Packages", target: "packages" },
    { title: "Booking", target: "booking" },
    { title: "About", target: "about" },
    { title: "Contact", target: "contact" },
  ];

  const navLinksMarkup = navLinks.map((navLink) => (
    <Box
      key={navLink.title}
      sx={{ flexGrow: 1, display: { xs: "none", md: "contents" } }}
    >
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
    </Box>
  ));

  const drawerMarkup = (
    <div className="drawer" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        <ListItem>
          <Avatar
            alt="logo"
            src="https://firebasestorage.googleapis.com/v0/b/meemure-app.appspot.com/o/assets%2Fimages%2Fmeemurelogo.png?alt=media&token=d114c0c5-161c-4c46-b07a-8358c238de4a"
          />
          <AiOutlineMenuFold
            style={{ marginLeft: "4rem", marginBottom: "1rem" }}
            onClick={toggleDrawer}
            size={20}
          />
        </ListItem>
        {navLinks.map((navLink) => (
          <ListItem key={navLink.title}>
            <Link
              activeClass="active"
              to={navLink.target}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <ListItemText primary={navLink.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const trigger = useScrollTrigger();

  return (
    <div className="navbar-root" style={{ width: "100%" }}>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          background: trigger ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)",
          transition: "background-color 0.5s ease",
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "none", md: "center" },
            width: "100%",
          }}
        >
          <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer()}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <AiOutlineMenu />
          </IconButton>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Grid item xs={1}>
              <Box
                sx={{
                  flexGrow: 1,
                  width: "100%",
                  display: { xs: "none", md: "contents" },
                }}
              >
                <a href="/">
                  <Avatar
                    sx={{ mr: "10vw" }}
                    alt="logo"
                    src="https://firebasestorage.googleapis.com/v0/b/meemure-app.appspot.com/o/assets%2Fimages%2Fmeemurelogo.png?alt=media&token=d114c0c5-161c-4c46-b07a-8358c238de4a"
                  />
                </a>
              </Box>
            </Grid>

            <Grid item xs={10} display="flex" justifyContent="center">
              {navLinksMarkup}
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={() => toggleDrawer()}>
        {drawerMarkup}
      </Drawer>
    </div>
  );
}

export default Navbar;
