import React, { useState } from "react";
import Notification from "../helper/Notification";
import Copyright from "../helper/Copyright";
import SignInForm from "./SignInForm";

import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";

export default function SignIn() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("sdf");

  const handleException = (exception) => {
    const errorMessage = `Invalid Username or Password`;
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
          Sign in
        </Typography>
        <SignInForm handleException={handleException} />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
