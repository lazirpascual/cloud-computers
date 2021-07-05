import React from "react";
import { Link } from "react-router-dom";

// Material-UI import
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "inherit",
    color: "black",
    boxShadow: "0px 0px 0px 0px",
    marginTop: 100,
  },
  spacing: {
    fontSize: "20px",
    margin: 25,
    textDecoration: "none",
    color: "inherit",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  return (
    <div>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Link to="/" className={classes.spacing}>
              Cloud Computers
            </Link>
            <Link to="/shop" className={classes.spacing}>
              Shop
            </Link>
            <Link to="/cart" className={classes.spacing}>
              <LocalMallOutlinedIcon />
            </Link>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </div>
  );
};

export default Navbar;
