import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

// Material-UI import
import { Typography, Container, Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  cartDetails: {
    marginTop: 30,
    marginLeft: 140,
  },
  name: {
    marginTop: 30,
    marginLeft: 30,
  },
  divider: {
    marginTop: 10,
  },
  image: {
    width: 120,
    height: 100,
  },
});

const CartProducts = ({ product }) => {
  const classes = useStyles();
  const { deleteProduct } = useContext(CartContext);

  return (
    <Container>
      <Grid container="center">
        <img
          className={classes.image}
          src={product.productPreview}
          alt={product.name}
        />
        <Typography className={classes.name} variant="body1">
          {product.name}
        </Typography>
        <Typography className={classes.cartDetails} variant="body1">
          {product.quantity}
        </Typography>
        <Typography className={classes.cartDetails} variant="body1">
          {product.price}
        </Typography>
        <Typography className={classes.cartDetails} variant="body1">
          $0.00
        </Typography>
        <IconButton className={classes.cartDetails}>
          <DeleteForeverIcon
            onClick={() => deleteProduct(product.id)}
          ></DeleteForeverIcon>
        </IconButton>
      </Grid>
      <Divider className={classes.divider} />
    </Container>
  );
};

export default CartProducts;
