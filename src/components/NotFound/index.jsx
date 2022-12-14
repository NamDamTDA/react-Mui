import { Box, Typography } from "@mui/material";
import React from "react";
import BrandArea from "../BrandArea";
import styles from "./styles.module.css";

const NotFound = () => {
  return (
    <div>
      <Box component="section" className={styles.error_section}>
        <Box className={styles.error_form}>
          <Typography component="h1">404</Typography>
          <Typography component="h2">Oops! PAGE NOT BE FOUND</Typography>
          <Typography component="p">
            Sorry but the page you are looking for does not exist, have been removed, name changed
            or is temporarily unavailable.
          </Typography>
        </Box>
      </Box>
      <BrandArea />
    </div>
  );
};

export default NotFound;
