import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import reviewService from "../../services/reviews";
import { Typography, Box, Divider, Grid } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";
import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

const CustomerReview = ({ reviews, setReviews }) => {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  const handleDelete = (key) => {
    if (window.confirm("Remove This Review?")) {
      reviewService.remove(key).then(() => {
        setReviews(reviews.filter((review) => review.id !== key));
      });
    }
  };

  return (
    <div>
      <Typography align="left" variant="h5" className={classes.customerReview}>
        Customer Reviews
      </Typography>
      <Divider className={classes.divider} />
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div className={classes.reviewWidth}>
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
              {user && user.name === review.user.name && (
                <IconButton onClick={() => handleDelete(review.id)}>
                  <DeleteForeverIcon></DeleteForeverIcon>
                </IconButton>
              )}
            </Box>
            <Typography variant="subtitle2" gutterBottom>
              Reviewed by {review.user.name} - {review.date}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {review.comment}
            </Typography>
            {review.recommend === true ? (
              <Grid container alignItems="center">
                <InsertEmoticonIcon />
                <Typography
                  className={classes.icon}
                  variant="caption"
                  gutterBottom
                >
                  <b>Yes,</b> I would recommend this to a friend
                </Typography>
              </Grid>
            ) : (
              <Grid container alignItems="center">
                <SentimentVeryDissatisfiedIcon />
                <Typography
                  className={classes.icon}
                  variant="caption"
                  gutterBottom
                >
                  <b>No,</b> I would not recommend this to a friend
                </Typography>
              </Grid>
            )}
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
