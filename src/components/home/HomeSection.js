import React from "react";
import "../../index.css";

// Material-UI import
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  main: {
    paddingLeft: 120,
    paddingTop: "35vh",
    color: "rgb(248, 244, 240)",
  },
  button: {
    marginTop: 20,
  },
});

const HomeSection = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className="home-bg">
      <div className={classes.main}>
        <Typography variant="h3" gutterBottom>
          Nvidia Gefore RTX 3090
        </Typography>
        <Typography variant="h5" gutterBottom>
          Now available for preorder, shipping December, 2020.
        </Typography>
        <Button
          onClick={() => history.push(`/react-shopping-website/shop`)}
          className={classes.button}
          variant="contained"
          size="large"
        >
          <Typography className="button" variant="h5" gutterBottom>
            SHOP NOW
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default HomeSection;
