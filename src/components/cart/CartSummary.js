import React from "react";

// Material-UI import
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  divider: {
    marginTop: 30,
  },
  heading: {
    marginLeft: 150,
  },
  summary: {
    width: 300,
    height: 650,
    paddingTop: 80,
    marginLeft: 100,
    backgroundColor: "rgb(238, 238, 238)",
  },
  summaryItems: {
    marginTop: 100,
  },
  button: {
    marginTop: 100,
    width: 200,
  },
});

const CartSummary = ({ productList, calculateOrderTotal }) => {
  const classes = useStyles();

  return (
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
      <Typography className={classes.summaryItems} align="center" variant="h6">
        ITEMS: {productList.length}
      </Typography>
      <Typography className={classes.summaryItems} align="center" variant="h6">
        TOTAL PRICE: ${calculateOrderTotal()}
      </Typography>
      <Button variant="contained" color="primary" className={classes.button}>
        Checkout
      </Button>
    </Grid>
  );
};

export default CartSummary;
