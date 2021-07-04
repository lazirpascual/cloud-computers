import React from "react";
import { Link } from "react-router-dom";

// Material-UI import
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Navbar = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
