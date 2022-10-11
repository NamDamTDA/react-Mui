import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";
import ShippingArea from "../ShippingArea";
import ProductArea from "../ProductArea";

const StoreTitle = () => {
  return (
    <div>
      <Box component="section" className={styles.lstore_title}>
        <Box className={styles.section_title}>
          <Typography component="h2">Lukani Store</Typography>
          <Typography component="p">
            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas
            sedurna malesuada consectetuer.
          </Typography>
        </Box>
      </Box>
      <ShippingArea />
      <Box className={styles.section_title}>
        <Typography component="h2">Featured Products</Typography>
      </Box>
      <ProductArea />
    </div>
  );
};

export default StoreTitle;
