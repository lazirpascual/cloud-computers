import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartSummary from "./CartSummary";
import CartDetails from "./CartDetails";

// Material-UI import
import { Container, Grid } from "@material-ui/core";

const CartSection = () => {
  const { productList, calculateOrderTotal } = useContext(CartContext);

  return (
    <Container>
      <Grid container direction="row">
        <CartDetails productList={productList} />
        <CartSummary
          productList={productList}
          calculateOrderTotal={calculateOrderTotal}
        />
      </Grid>
    </Container>
  );
};

export default CartSection;
