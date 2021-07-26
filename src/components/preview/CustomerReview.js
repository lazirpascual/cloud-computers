import React from "react";
import { Typography, Box, Divider } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

const CustomerReview = ({ reviews }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography align="left" variant="h5" className={classes.productName}>
        Customer Reviews
      </Typography>
      <Divider className={classes.divider} />
      {reviews.map((review) => (
        <div>
          <Box
            className={classes.review}
            display="flex"
            justifyContent="left"
            component="fieldset"
            borderColor="transparent"
          >
            <Rating name="read-only" value={review.rating} readOnly />
            <Typography className={classes.textReview} variant="body1">
              {review.title}
            </Typography>
          </Box>
          <Typography variant="subtitle2" gutterBottom>
            Reviewed by {review.user.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {review.comment}
          </Typography>
          <Typography variant="caption" gutterBottom>
            {review.recommend
              ? `Yes, I would recommend this to a friend`
              : `No, I would NOT recommend this to a friend`}
          </Typography>
          <Divider className={classes.divider} />
        </div>
      ))}
    </div>
  );
};

export default CustomerReview;
