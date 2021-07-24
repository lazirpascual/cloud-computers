import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";
import { useHistory } from "react-router-dom";
import { Typography, Container, Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  productDivider,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./styles";

const CartProducts = ({ product }) => {
  const classes = useStyles();
  const { updateCartState, deleteProduct, calculateSubtotal, updateQuantity } =
    useContext(CartContext);
  const { savePreview } = useContext(ProductContext);
  const history = useHistory();
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    updateQuantity(quantity, product);
    // update state so that we can see updated quantity right away
    updateCartState();
  }, [quantity]);

  const handleClick = (productPreview) => {
    savePreview(productPreview);
    history.push("/preview");
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
        <FormControl className={classes.products}>
          <Select value={quantity} onChange={handleChange}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
          </Select>
        </FormControl>
        <Typography className={classes.products} variant="body1">
          ${product.price}
        </Typography>
        <Typography className={classes.products} variant="body1">
          ${calculateSubtotal(product)}
        </Typography>
        <Grid>
          <IconButton className={classes.products}>
            <DeleteForeverIcon
              onClick={() => deleteProduct(product.id)}
            ></DeleteForeverIcon>
          </IconButton>
        </Grid>
      </Grid>
      <productDivider className={classes.productDivider} />
    </Container>
  );
};

export default CartProducts;
