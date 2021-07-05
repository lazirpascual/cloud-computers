import React, { useContext, useEfect } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import ProductData from "../../data/products.json";

// Material-UI import
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    marginBottom: 150,
  },
  category: {
    fontSize: "17px",
    justifyContent: "flex-start",
  },
});

const Category = () => {
  const classes = useStyles();
  const { setProducts, filterProduct } = useContext(ShopContext);

  const categories = [
    { category: "processors" },
    { category: "memory" },
    { category: "motherboard" },
    { category: "video card" },
    { category: "case" },
  ];

  const handleClick = (e) => {
    setProducts(ProductData);
    filterProduct(e);
  };

  const handleReset = () => {
    setProducts(ProductData);
  };

  return (
    <div>
      <Typography className={classes.main} variant="p">
        Shop /
      </Typography>
      <Typography className={classes.main} variant="h4" gutterBottom>
        All Products
      </Typography>
      <ButtonGroup
        orientation="vertical"
        color="inherit"
        aria-label="vertical outlined primary button group"
        variant="text"
        size="large"
      >
        <Button className={classes.category} onClick={handleReset}>
          All
        </Button>
        {categories.map((item) => (
          <Button
            key={item.category}
            className={classes.category}
            onClick={() => handleClick(item.category)}
          >
            {item.category}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Category;
