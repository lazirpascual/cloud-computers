import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";

// Material-UI import
import { Typography, CardMedia, CardContent, Card } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f2eeeb",
    maxWidth: 600,
    margin: 15,
  },
  media: {
    height: 225,
    paddingTop: 25,
    paddingBottom: 25,
  },
});

const Products = () => {
  const classes = useStyles();
  const { products } = useContext(ShopContext);

  return (
    <Container>
      <Grid container>
        {products.items.map((product) => (
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.root} key={product.id}>
              <CardMedia
                className={classes.media}
                component="img"
                src={product.imgPath}
                title={product.name}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
