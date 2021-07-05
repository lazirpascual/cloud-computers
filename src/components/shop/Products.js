import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";

// Material-UI import
import { Typography, CardMedia, CardContent, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F5F5F5",
    maxWidth: 320,
    margin: 20,
  },
  media: {
    height: 200,
  },
});

const Products = () => {
  const classes = useStyles();
  const { products } = useContext(ShopContext);

  return (
    <div>
      {products.items.map((product) => (
        <Card className={classes.root}>
          <CardMedia
            component="img"
            src={product.imgPath}
            className={classes.media}
            title={product.name}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ${product.price}.00
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Products;
