import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartProducts from "./CartProducts";

// Material-UI import
import { Typography, Container, Grid, Button } from "@material-ui/core";
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
  summaryItems: {
    marginTop: 150,
  },
  button: {
    marginTop: 150,
    width: 200,
  },
});

const CartSection = () => {
  const classes = useStyles();
  const { productList, calculateOrderTotal } = useContext(CartContext);

  return (
    <Container>
      <Grid container direction="row">
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
            <Typography className={classes.divider} variant="h5">
              Your Cart is Empty
            </Typography>
          )}
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.summary}
        >
          <Typography align="center" variant="h4">
            Order Summary
          </Typography>
          <Divider className={classes.divider} />
          <Typography
            className={classes.summaryItems}
            align="center"
            variant="h6"
          >
            ITEMS: {productList.length}
          </Typography>
          <Typography
            className={classes.summaryItems}
            align="center"
            variant="h6"
          >
            TOTAL PRICE: ${calculateOrderTotal()}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartSection;
