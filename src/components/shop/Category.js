import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import productService from "../../services/products";
import Search from "./Search";

// Material-UI import
import { Typography, Button, ButtonGroup, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttons: {
    marginTop: 130,
  },
  category: {
    fontSize: "17px",
    justifyContent: "flex-start",
  },
  main: {
    paddingBottom: 20,
  },
});

const Category = () => {
  const classes = useStyles();
  const { products, setProducts, filterProduct } = useContext(ShopContext);
  const [currentCategory, setCurrentCategory] = useState("All Products");
  const [viewAll, setViewAll] = useState(true);

  const categories = [
    { category: "Processors" },
    { category: "Memory" },
    { category: "Motherboard" },
    { category: "Video Card" },
    { category: "Case" },
  ];

  const ToggleViewAll = () => {
    setViewAll(!viewAll);
  };

  const handleClick = (e) => {
    filterProduct(e);
    setCurrentCategory(e);
    ToggleViewAll();
  };

  const handleReset = () => {
    productService.getAll().then((initialProducts) => {
      setProducts(initialProducts);
    });
    setCurrentCategory("All Products");
    ToggleViewAll();
  };

  return (
    <div>
      <Typography variant="p">Shop /</Typography>
      <Typography className={classes.main} variant="h4" gutterBottom>
        {currentCategory}
      </Typography>
      <Search />
      <ButtonGroup
        className={classes.buttons}
        orientation="vertical"
        color="inherit"
        aria-label="vertical outlined primary button group"
        variant="text"
        size="large"
      >
        {viewAll ? (
          categories.map((item) => (
            <Button
              key={item.category}
              className={classes.category}
              onClick={() => handleClick(item.category)}
            >
              {item.category}
            </Button>
          ))
        ) : (
          <Button className={classes.category} onClick={handleReset}>
            View All Products
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
};

export default Category;
