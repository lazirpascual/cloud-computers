import React, { useState, useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { TextField, Container, Typography, Divider } from "@material-ui/core";
import { Grid, Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import useStyles from "./styles";

const ReviewForm = () => {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  const { preview, savePreview } = useContext(ProductContext);
  const history = useHistory();
  const [recommend, setRecommend] = useState("female");

  const handleClick = (productPreview) => {
    savePreview(productPreview);
    history.push("/preview");
  };

  return user ? (
    <Container>
      <Typography align="left" variant="h4">
        Write Your Review
      </Typography>
      <Grid
        container
        className={classes.product}
        onClick={() => handleClick(preview)}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <img
          className={classes.image}
          src={preview.productPreview}
          alt={preview.name}
        />
        <Typography align="left" variant="h6">
          {preview.name}
        </Typography>
      </Grid>
      <Divider className={classes.divider} />
      <Typography className={classes.heading} variant="h6">
        Overall Rating
      </Typography>
      <Rating
        name="half-rating"
        defaultValue={5}
        precision={0.5}
        size="large"
      />
      <Typography className={classes.heading} variant="h6">
        Review Details
      </Typography>
      <Typography variant="body1">
        Let us know how this product is working for you.
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Review Title"
        name="title"
      />
      <Typography variant="caption">
        Write a short, descriptive title for your review.
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Your Review"
        name="comment"
        multiline
        rows={5}
      />
      <Typography className={classes.heading} variant="h6">
        Would you recommend this to a friend?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          value={recommend}
          onChange={(e) => setRecommend(e.target.value)}
        >
          <FormControlLabel value={true} control={<Radio />} label="Yes" />
          <FormControlLabel value={false} control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        color="primary"
      >
        Submit Review
      </Button>
    </Container>
  ) : (
    <Container>
      <Button
        onClick={() => handleClick(preview)}
        size="large"
        variant="contained"
        color="primary"
      >
        Back To Product
      </Button>
      <Typography className={classes.error} align="center" variant="h5">
        You must be logged in to write a review
      </Typography>
    </Container>
  );
};

export default ReviewForm;
