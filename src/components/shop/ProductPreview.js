import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { useHistory } from "react-router-dom";
import AddToCart from "./AddToCart";
import "../../index.css";

// Material-UI import
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles({
  productInfo: {
    marginTop: 40,
  },
  productName: {
    marginTop: 50,
  },
  price: {
    marginLeft: 250,
    marginTop: 180,
  },
  addCart: {
    marginTop: 50,
  },
  image: {
    marginTop: 20,
  },
});

const ProductPreview = () => {
  const classes = useStyles();
  const { preview } = useContext(ProductContext);
  const history = useHistory();
  const [completeOrder, setCompleteOrder] = useState(false);

  return (
    <Container className="cart-bg">
      <Grid container direction="row" alignItems="flex-start" spacing={10}>
        <Grid item xs={6} md={6} lg={6}>
          <Button
            onClick={() => history.push(`/shop`)}
            size="large"
            variant="contained"
            color="primary"
          >
            Back To Shopping
          </Button>
          <Typography variant="h6" className={classes.productInfo}>
            Shop / {preview.category}
          </Typography>
          <Typography
            align="center"
            variant="h3"
            className={classes.productName}
            gutterBottom
          >
            {preview.name}
          </Typography>
          <Grid container justify="center">
            <img
              className={classes.image}
              src={preview.productPreview}
              alt={preview.name}
            />
          </Grid>
        </Grid>
        <Grid item xs={6} md="auto" lg="auto" className={classes.price}>
          <Typography variant="h6">
            <Box letterSpacing={6}>CLOUD COMPUTERS</Box>
          </Typography>
          <Typography variant="h3" className={classes.productInfo}>
            ${preview.price}
          </Typography>
          <AddToCart preview={preview} setCompleteOrder={setCompleteOrder} />
          {completeOrder && (
            <Button
              onClick={() => history.push(`/react-shopping-website/cart`)}
              startIcon={<CheckCircleOutlineIcon />}
              size="large"
              variant="outlined"
              className={classes.productInfo}
              style={{
                width: 250,
                height: 70,
                color: "#C71585",
                fontSize: 17,
              }}
              color="inherit"
            >
              Complete Order
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPreview;
