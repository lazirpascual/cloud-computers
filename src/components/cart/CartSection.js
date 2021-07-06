import React from "react";
import Navbar from "../Navbar";

// Material-UI import
import { Button } from "@material-ui/core";

const CartSection = () => {
  return (
    <div>
      <Navbar />
      <Button>Checkout</Button>
    </div>
  );
};

export default CartSection;
