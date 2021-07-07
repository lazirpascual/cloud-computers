import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartProducts from "./CartProducts";

// Material-UI import
import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  cartDetails: {
    marginTop: 30,
    marginLeft: 115,
  },
  divider: {
    marginTop: 30,
  },
  heading: {
    marginLeft: 125,
  },
});

const CartSection = () => {
  const classes = useStyles();
  const { productList } = useContext(CartContext);

  return (
    <Container>
      <Typography variant="h2">Shopping Cart</Typography>
      <Divider className={classes.divider} />
      <Grid container className={classes.heading}>
        <Typography className={classes.cartDetails} variant="h6">
          Product Details
        </Typography>
        <Typography className={classes.cartDetails} variant="h6">
          Quantity
        </Typography>
        <Typography className={classes.cartDetails} variant="h6">
          Price
        </Typography>
        <Typography className={classes.cartDetails} variant="h6">
          Subtotal
        </Typography>
      </Grid>
      <Divider className={classes.divider} />
      {productList.length ? (
        productList.map((product) => (
          <CartProducts product={product} key={product.id} />
        ))
      ) : (
        <Typography className={classes.divider} variant="h5">
          Your Cart is Empty
        </Typography>
      )}
    </Container>
  );
};

export default CartSection;
