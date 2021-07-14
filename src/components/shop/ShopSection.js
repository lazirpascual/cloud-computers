import React, { useEffect, useContext } from "react";
import Products from "./Products";
import Category from "./Category";
import { ShopContext } from "../../contexts/ShopContext";
import productService from "../../services/products";
import "../../index.css";

// Material-UI import
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: "30%",
    paddingLeft: "10%",
  },
  main: {
    maxWidth: "70%",
  },
});

const ShopSection = () => {
  const classes = useStyles();
  const { setProducts } = useContext(ShopContext);

  useEffect(() => {
    productService.getAll().then((initialProducts) => {
      setProducts(initialProducts);
    });
  }, []);

  return (
    <div className="shop-bg">
      <Grid container>
        <Grid className={classes.root} item xs={12} md={6} lg={4}>
          <Category />
        </Grid>
        <Grid className={classes.main} item xs="auto" md="auto" lg="auto">
          <Products />
        </Grid>
      </Grid>
    </div>
  );
};

export default ShopSection;
