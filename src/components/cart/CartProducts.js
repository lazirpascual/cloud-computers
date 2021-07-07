import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";
import { useHistory } from "react-router-dom";

// Material-UI import
import { Typography, Container, Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Divider, FormControl, Select, MenuItem } from "@material-ui/core";

const useStyles = makeStyles({
  cartDetails: {
    width: 50,
    marginTop: 20,
    marginLeft: 40,
  },
  name: {
    width: 250,
    marginTop: 20,
    marginLeft: 30,
  },
  divider: {
    marginTop: 10,
  },
  image: {
    cursor: "pointer",
    width: 100,
    height: 70,
  },
});

const CartProducts = ({ product }) => {
  const classes = useStyles();
  const { updateCartState, deleteProduct, calculateSubtotal, updateQuantity } =
    useContext(CartContext);
  const { savePreview } = useContext(ProductContext);
  const history = useHistory();
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    updateQuantity(quantity, product.id);
    // update state so that we can see updated quantity right away
    updateCartState();
  }, [quantity]);

  const handleClick = (productPreview) => {
    savePreview(productPreview);
    history.push("/react-shopping-website/preview");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  return (
    <Container>
      <Grid container alignItems="center" justifyContent="space-evenly">
        <img
          onClick={() => handleClick(product)}
          className={classes.image}
          src={product.productPreview}
          alt={product.name}
        />
        <Typography className={classes.name} variant="body1">
          {product.name}
        </Typography>
        <FormControl className={classes.cartDetails}>
          <Select value={quantity} onChange={handleChange}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
          </Select>
        </FormControl>
        <Typography className={classes.cartDetails} variant="body1">
          ${product.price}
        </Typography>
        <Typography className={classes.cartDetails} variant="body1">
          ${calculateSubtotal(product)}
        </Typography>
        <Grid>
          <IconButton className={classes.cartDetails}>
            <DeleteForeverIcon
              onClick={() => deleteProduct(product.id)}
            ></DeleteForeverIcon>
          </IconButton>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Container>
  );
};

export default CartProducts;
