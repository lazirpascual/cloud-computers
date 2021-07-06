import React from "react";
import "../../index.css";

// Material-UI import
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    paddingLeft: "5%",
    paddingTop: "20%",
    color: "white",
  },
});

const HomeSection = () => {
  const classes = useStyles();
  return (
    <div className="home-bg">
      <div className={classes.main}>
        <Typography variant="h3" gutterBottom>
          Nvidia Gefore RTX 3090
        </Typography>
        <Typography variant="h5" gutterBottom>
          Now available for preorder, shipping December, 2020.
        </Typography>
        <Button variant="contained" size="large">
          <Typography className="button" variant="h5" gutterBottom>
            SHOP NOW
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default HomeSection;
