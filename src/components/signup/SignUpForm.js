import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import userService from "../../services/users";
import { UserContext } from "../../contexts/UserContext";

import { Button, Link, Grid, TextField } from "@material-ui/core";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import useStyles from "../signin/styles";

const SignUpForm = ({ handleException }) => {
  const classes = useStyles();
  const history = useHistory();
  const { loginToApp } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const signupSuccess = await userService.signup({
        username,
        password,
        name,
        lastName,
      });
      setUsername("");
      setPassword("");
      setName("");
      setLastName("");
      // after signing up, log user in
      const loginSuccess = await loginToApp(username, password);

      if (signupSuccess && loginSuccess) {
        history.push(`/`);
      }
    } catch (exception) {
      handleException(exception);
    }
  };

  return (
    <form onSubmit={handleSignUp} className={classes.form} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => setName(e.target.value)}
            value={name}
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            variant="outlined"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link
            className={classes.cursor}
            onClick={() => history.push(`/signin`)}
            variant="body2"
          >
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignUpForm;
