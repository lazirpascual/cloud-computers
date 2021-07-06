import React from "react";
import Navbar from "../Navbar";

// Material-UI import
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    paddingLeft: "5%",
    paddingTop: "10%",
  },
});

const HomeSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Navbar />
      <Typography variant="h3" gutterBottom>
        Nvidia Gefore RTX 3090
      </Typography>
      <Typography variant="h5" gutterBottom>
        Now available for preorder, shipping December, 2020.
      </Typography>
      <Button variant="outlined" size="large">
        <Typography variant="h5" gutterBottom>
          SHOP NOW
        </Typography>
      </Button>
    </div>
  );
};

export default HomeSection;
