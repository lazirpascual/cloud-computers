import React, { useState } from "react";

// Material-UI import
import { CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  media: {
    height: 225,
    paddingTop: 25,
    paddingBottom: 25,
  },
  mediaHovered: {
    height: 225,
    paddingTop: 25,
    paddingBottom: 25,
    transform: "scale3d(1.3, 1.3, 1)",
    transition:
      "all .1s cubic-bezier(.61,1,.88,1),transform .15s cubic-bezier(.61,1,.88,1)",
  },
});

const MediaPreview = ({ product }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  return (
    <CardMedia
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      className={show ? classes.mediaHovered : classes.media}
      component="img"
      src={show ? product.imgPreview : product.imgPath}
      title={product.name}
    ></CardMedia>
  );
};

export default MediaPreview;
