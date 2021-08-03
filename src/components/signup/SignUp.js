import React, { useState } from "react";
import Notification from "../helper/Notification";
import Copyright from "../helper/Copyright";
import SignUpForm from "./SignUpForm";

import { Avatar, Box, Typography, Container } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "../signin/styles";

export default function SignUp() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleException = (exception) => {
    const errorMessage = `Invalid Username or Password: Must be at least 5 chars in length`;
    setOpen(true);
    setErrorMessage(errorMessage);
    console.log(exception);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Notification message={errorMessage} open={open} setOpen={setOpen} />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <SignUpForm handleException={handleException} />
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
