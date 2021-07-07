import React from "react";
import CartProducts from "./CartProducts";

// Material-UI import
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  cartDetails: {
    marginTop: 30,
    marginLeft: 20,
  },
  divider: {
    marginTop: 30,
  },
  heading: {
    marginLeft: 150,
  },
  cartWidth: {
    maxWidth: "70%",
  },
  summary: {
    width: 300,
    height: 800,
    paddingTop: 80,
    marginLeft: 100,
    backgroundColor: "rgb(238, 238, 238)",
  },
});

const CartDetails = ({ productList }) => {
  const classes = useStyles();

  return (
    <Grid item xs="auto" md="auto" lg="auto" className={classes.cartWidth}>
      <Typography variant="h2">Shopping Cart</Typography>
      <Divider className={classes.divider} />
      <Grid container className={classes.heading}>
        <Divider className={classes.divider} />
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
        <Typography align="center" className={classes.divider} variant="h5">
          — Your Cart is Empty —
        </Typography>
      )}
    </Grid>
  );
};

export default CartDetails;
