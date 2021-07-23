import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

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
    marginRight: 25,
  },
});

const HomeSection = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = (params) => {
    window.localStorage.removeItem("loggedUser");
    setUser(null);
  };

  const handleLogin = (params) => {
    history.push(`/signin`);
  };

  const loginText = user ? `Logout` : `Login`;
  const loginFunction = user ? handleLogout : handleLogin;

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
        <Button
          onClick={loginFunction}
          className={classes.button}
          variant="contained"
          size="large"
        >
          <Typography className="button" variant="h5" gutterBottom>
            {loginText}
          </Typography>
        </Button>
        {user ? (
          <Typography variant="h2">Welcome {user.name}</Typography>
        ) : null}
      </div>
    </div>
  );
};

export default HomeSection;
