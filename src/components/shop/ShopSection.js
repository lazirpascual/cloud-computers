import React, { useContext, useEffect } from "react";
import Products from "./Products";
import Category from "./Category";
import ProductData from "../../data/products.json";
import { ShopContext } from "../../contexts/ShopContext";

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
    setProducts(ProductData);
  }, []);

  return (
    <div>
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
