import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartSummary from "../../components/cart/CartSummary";
import CartDetails from "../../components/cart/CartDetails";
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
