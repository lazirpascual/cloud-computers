import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

// Material-UI import
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Slide, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "inherit",
    color: "black",
    boxShadow: "0px 0px 0px 0px",
    marginTop: 100,
  },
  spacing: {
    fontSize: "25px",
    marginLeft: 100,
    marginRight: 100,
    textDecoration: "none",
    color: "inherit",
  },
  toolbar: {
    display: "flex",
    marginRight: 130,
    justifyContent: "flex-end",
  },
  navbar: {
    marginBottom: 200,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();
  // dynamically change color of navbar based on current url
  const path = useLocation().pathname;
  const location = path.split("/")[2];

  return (
    <div className={classes.navbar}>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar className={location ? location : "home"}>
            <Link to="/react-shopping-website/" className={classes.spacing}>
              <Typography variant="h6">CLOUD COMPUTERS</Typography>
            </Link>
            <Link to="/react-shopping-website/shop" className={classes.spacing}>
              <Typography variant="h6">Shop</Typography>
            </Link>
            <Link to="/react-shopping-website/cart" className={classes.spacing}>
              <LocalMallOutlinedIcon fontSize="large" />
            </Link>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </div>
  );
};

export default Navbar;
