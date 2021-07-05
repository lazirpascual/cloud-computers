import React from "react";

// Material-UI import
import { Typography, Button, ButtonGroup, Box } from "@material-ui/core";
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
        <Button className={classes.category}>Processors</Button>
        <Button className={classes.category}>Memory</Button>
        <Button className={classes.category}>Motherboards</Button>
        <Button className={classes.category}>Video Cards</Button>
        <Button className={classes.category}>Case</Button>
      </ButtonGroup>
    </div>
  );
};

export default Category;
