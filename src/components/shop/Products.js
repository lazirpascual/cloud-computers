import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import MediaPreview from "./MediaPreview";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { Typography, CardContent, Card } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Products = () => {
  const classes = useStyles();
  const { products } = useContext(ShopContext);
  const { savePreview } = useContext(ProductContext);
  const history = useHistory();

  const handleClick = (product) => {
    savePreview(product);
    history.push("/preview");
  };

  return (
    <Container>
      <Grid container>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item xs={12} md={6} lg={4}>
              <Card
                onClick={() => handleClick(product)}
                className={classes.rootProducts}
                key={product.id}
              >
                <MediaPreview product={product} />
                <CardContent>
                  <Typography
                    className={classes.productName}
                    align="center"
                    gutterBottom
                    variant="body1"
                    component="h2"
                  >
                    <b>{product.name}</b>
                  </Typography>
                  <Typography align="center" variant="body1" component="p">
                    ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <div>
            <Typography
              align="center"
              color="textSecondary"
              className={classes.text}
              variant="h4"
            >
              No products found with that name.
            </Typography>
            <Typography
              align="center"
              color="textSecondary"
              className={classes.text}
              variant="h6"
            >
              (Please wait until the API is fetched from Heroku upon initial
              load)
            </Typography>
          </div>
        )}
      </Grid>
    </Container>
  );
};

export default Products;
