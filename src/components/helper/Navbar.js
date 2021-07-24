import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import LogInOutButton from "../home/LogInOutButton";
import { AppBar, Toolbar } from "@material-ui/core";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Slide, Typography, Box } from "@material-ui/core";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const { calculateTotalQuantity } = useContext(CartContext);
  const trigger = useScrollTrigger();
  // dynamically change color of navbar based on current url
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <div className={classes.navbar}>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar className={location ? location : "home"}>
            <Link to="/" className={classes.company}>
              <Typography variant="h6">
                <Box letterSpacing={4}>CLOUD COMPUTERS</Box>
              </Typography>
            </Link>
            <Link to="/shop" className={classes.spacing}>
              <Typography variant="h6">Shop</Typography>
            </Link>
            <Link to="/cart" className={classes.spacing}>
              <LocalMallOutlinedIcon fontSize="large" /> (
              {calculateTotalQuantity()})
            </Link>
            <LogInOutButton
              className={classes.spacing}
              variant="text"
              size="small"
              textVariant="h6"
            ></LogInOutButton>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </div>
  );
};

export default Navbar;
