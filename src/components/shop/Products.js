import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import MediaPreview from "./MediaPreview";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";

// Material-UI import
import { Typography, CardContent, Card } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f2eeeb",
    maxWidth: 700,
    height: 425,
    margin: 15,
    cursor: "pointer",
  },
  text: {
    paddingTop: 80,
    paddingLeft: 150,
  },
});

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
                className={classes.root}
                key={product.id}
              >
                <MediaPreview product={product} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body1" component="p">
                    ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography
            align="center"
            color="primary"
            className={classes.text}
            variant="h4"
          >
            No products found with that name.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Products;
