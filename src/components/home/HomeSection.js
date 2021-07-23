import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";

// Material-UI import
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import LogInOutButton from "./LogInOutButton";

const useStyles = makeStyles({
  main: {
    paddingLeft: 120,
    paddingTop: "22vh",
    color: "rgb(248, 244, 240)",
  },
  button: {
    marginTop: 20,
    marginRight: 25,
  },
  greeting: {
    marginTop: 100,
  },
});

const HomeSection = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useContext(UserContext);

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
          onClick={() => history.push(`/shop`)}
          className={classes.button}
          variant="contained"
          size="large"
        >
          <Typography className="button" variant="h5" gutterBottom>
            SHOP NOW
          </Typography>
        </Button>
        {!user ? (
          <Button
            onClick={() => history.push(`/signup`)}
            className={classes.button}
            variant="contained"
            size="large"
          >
            <Typography className="button" variant="h5" gutterBottom>
              Register
            </Typography>
          </Button>
        ) : null}
        <LogInOutButton
          className={classes.button}
          variant="contained"
          size="large"
          textVariant="h5"
        ></LogInOutButton>
        {user ? (
          <div className={classes.greeting}>
            <Typography variant="h2">Welcome {user.name},</Typography>
            <Typography variant="h6">
              Exclusive offer -15% this week on select items.
            </Typography>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HomeSection;
