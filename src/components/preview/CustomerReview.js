import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Typography, Box, Divider } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";
import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const CustomerReview = ({ reviews }) => {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  return (
    <div>
      <Typography align="left" variant="h5" className={classes.customerReview}>
        Customer Reviews
      </Typography>
      <Divider className={classes.divider} />
      {reviews.length ? (
        reviews.map((review) => (
          <div>
            <Box
              className={classes.review}
              display="flex"
              justifyContent="left"
              alignItems="center"
              component="fieldset"
              borderColor="transparent"
            >
              <Rating name="read-only" value={review.rating} readOnly />
              <Typography className={classes.textReview} variant="body1">
                {review.title}
              </Typography>
              {user.name === review.user.name && (
                <IconButton>
                  <DeleteForeverIcon></DeleteForeverIcon>
                </IconButton>
              )}
            </Box>
            <Typography variant="subtitle2" gutterBottom>
              Reviewed by {review.user.name} - {review.date}
              {console.log(review)}
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
        ))
      ) : (
        <Typography align="left" className={classes.divider} variant="body1">
          No reviews for this product
        </Typography>
      )}
    </div>
  );
};

export default CustomerReview;
