import React from "react";
import { Typography, Link } from "@material-ui/core";

const Copyright = () => {
  return (
    <Typography align="center" variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/lazirpascual/shopping-website"
      >
        Cloud Computers
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
