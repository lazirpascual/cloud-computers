import React from "react";
import Copyright from "./Copyright";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography
            className={classes.copyright}
            variant="body2"
            align="center"
          >
            Disclaimer: The depiction of products or images is for demonstration
            purposes only and remain the property of their respective owners.
            Not for actual sale.
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
