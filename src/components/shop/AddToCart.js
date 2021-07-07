import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

// Material-UI import
import { Snackbar, Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  productInfo: {
    marginTop: 40,
  },
});

const AddToCart = ({ preview }) => {
  const classes = useStyles();
  const { addProduct } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    addProduct(preview);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        startIcon={<AddShoppingCartIcon />}
        size="large"
        variant="outlined"
        className={classes.productInfo}
        style={{
          width: 250,
          height: 70,
        }}
        color="secondary"
      >
        Add To Cart
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant="standard" onClose={handleClose} severity="success">
          {preview.name} has been added to the Cart!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddToCart;
