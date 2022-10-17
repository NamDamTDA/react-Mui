import { ExpandLess } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const ScrollButton = (showBelow) => {
  const [show, setShow] = useState(showBelow ? false : true);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > showBelow.showBelow) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <>
      {show && (
        <IconButton onClick={handleClick} className={styles.totop}>
          <ExpandLess />
        </IconButton>
      )}
    </>
  );
};

export default ScrollButton;
