import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { useHistory } from "react-router-dom";
import AddToCart from "./AddToCart";
import CustomerReview from "./CustomerReview";
import reviewService from "../../services/reviews";
import Footer from "../helper/Footer";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Link from "@material-ui/core/Link";
import useStyles from "./styles";
import Rating from "@material-ui/lab/Rating";

const ProductPreview = () => {
  const classes = useStyles();
  const { preview } = useContext(ProductContext);
  const history = useHistory();
  const [completeOrder, setCompleteOrder] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getProductReviews = async () => {
      const initialReviews = await reviewService.getAll();
      const productReviews = initialReviews.filter(
        (review) => preview.id === review.productId
      );
      setReviews(productReviews);
    };

    getProductReviews();
  }, []);

  const calculateAverageReview = () => {
    const sum = reviews.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating;
    }, 0);

    return reviews.length === 0 ? 0 : sum / reviews.length;
  };

  return (
    <div>
      <Container className="cart-bg">
        <Grid container direction="row" alignItems="flex-start" spacing={10}>
          <Grid item xs="auto" md="auto" lg="auto">
            <Button
              onClick={() => history.push(`/shop`)}
              size="large"
              variant="contained"
              color="primary"
            >
              Back To Shopping
            </Button>
            <Typography variant="h6" className={classes.productInfo}>
              Shop / {preview.category}
            </Typography>
            <Typography
              align="left"
              variant="h3"
              className={classes.productName}
            >
              {preview.name}
            </Typography>
            <Box
              className={classes.review}
              display="flex"
              justifyContent="left"
              component="fieldset"
              mb={2}
              borderColor="transparent"
            >
              <Rating
                name="half-rating-read"
                value={calculateAverageReview()}
                precision={0.5}
                readOnly
              />
              <Typography className={classes.reviewLength}>
                ({reviews.length})
              </Typography>
              <Typography className={classes.textReview} variant="body1">
                <Link
                  className={classes.cursor}
                  onClick={() => history.push(`/review`)}
                >
                  Write A Review
                </Link>
              </Typography>
            </Box>
            <img
              className={classes.image}
              src={preview.productPreview}
              alt={preview.name}
            />
          </Grid>
          <Grid item xs="auto" md="auto" lg="auto" className={classes.price}>
            <Typography variant="h6">
              <Box letterSpacing={6}>CLOUD COMPUTERS</Box>
            </Typography>
            <Typography variant="h3" className={classes.productInfo}>
              ${preview.price}
            </Typography>
            <AddToCart preview={preview} setCompleteOrder={setCompleteOrder} />
            {completeOrder && (
              <Button
                onClick={() => history.push(`/cart`)}
                startIcon={<CheckCircleOutlineIcon />}
                size="large"
                variant="outlined"
                className={classes.productInfo}
                style={{
                  width: 250,
                  height: 70,
                  color: "#C71585",
                  fontSize: 17,
                }}
                color="inherit"
              >
                Complete Order
              </Button>
            )}
          </Grid>
        </Grid>
        <CustomerReview reviews={reviews} setReviews={setReviews} />
      </Container>
      <Footer />
    </div>
  );
};

export default ProductPreview;
