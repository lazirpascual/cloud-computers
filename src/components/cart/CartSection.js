import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

// Material-UI import
import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cartDetails: {
    marginTop: 30,
    marginLeft: 60,
  },
});

const CartSection = () => {
  const classes = useStyles();
  const { productList } = useContext(CartContext);

  return (
    <Container>
      <Typography variant="h2">Shopping Cart</Typography>
      <Grid container>
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
          Product Details
        </Typography>
      </Grid>
      {productList.map((product) => (
        <ul>
          <li>Name: {product.name}</li>
        </ul>
      ))}
    </Container>
  );
};

export default CartSection;
