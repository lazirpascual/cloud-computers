import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useHistory } from "react-router-dom";

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
    marginLeft: 36,
    marginTop: 100,
  },
});

const CartSummary = ({ productList, calculateOrderTotal }) => {
  const classes = useStyles();
  const { calculateTotalQuantity } = useContext(CartContext);
  const history = useHistory();

  return (
    <Grid container direction="column" className={classes.summary}>
      <Typography align="center" variant="h4">
        Order Summary
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.summaryItems} align="center" variant="h6">
        ITEMS: {calculateTotalQuantity()}
      </Typography>
      <Typography className={classes.summaryItems} align="center" variant="h6">
        TOTAL PRICE: ${calculateOrderTotal()}
      </Typography>
      <Button
        onClick={() => history.push(`/checkout`)}
        style={{
          fontSize: 22,
          width: 230,
          height: 70,
        }}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Checkout
      </Button>
    </Grid>
  );
};

export default CartSummary;
