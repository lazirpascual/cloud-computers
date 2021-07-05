import React from "react";
import { Link } from "react-router-dom";

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
    justifyContent: "center",
    marginRight: 130,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  return (
    <div>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            <Link to="/" className={classes.spacing}>
              <Typography color="textSecondary" variant="h5">
                CLOUD COMPUTERS
              </Typography>
            </Link>
            <Link to="/shop" className={classes.spacing}>
              <Typography color="textPrimary" variant="h5">
                Shop
              </Typography>
            </Link>
            <Link to="/cart" className={classes.spacing}>
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
