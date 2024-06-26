import React, { useContext } from 'react';
import { ShopContext } from '../../contexts/ShopContext';
import ProductCard from './ProductCard';
import {
  Typography,
  Container,
  Grid,
  Box,
  LinearProgress,
} from '@material-ui/core';

import useStyles from './styles';

const Products = () => {
  const classes = useStyles();
  const { products, isLoading } = useContext(ShopContext);

  if (isLoading)
    return (
      <Box className={classes.loadingIndicator}>
        <LinearProgress />
        <Typography align="center" color="textSecondary" variant="h6">
          Initializing product catalog from our servers. Your selections will be
          ready shortly.
        </Typography>
      </Box>
    );

  return (
    <Container>
      <Grid container>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item xs={12} md={6} lg={4} key={product.id}>
              <ProductCard product={product} />
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
          </div>
        )}
      </Grid>
    </Container>
  );
};

export default Products;
