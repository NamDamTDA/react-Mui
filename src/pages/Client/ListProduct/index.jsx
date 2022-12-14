import { Box, FormControl, InputLabel, NativeSelect, Typography } from "@mui/material";
import React from "react";
import CartDrawer from "../../../components/CartDrawer";
import ListCategoriAside from "../../../components/CategoriAside";
import ProductArea from "../../../components/ProductArea";
import ScrollButton from "../../../components/ScrollButton";
import styles from "./styles.module.css";

const ListProduct = () => {
  return (
    <div>
      <ScrollButton showBelow={250} />
      <CartDrawer />
      <Box component="section" className={styles.product_page_area}>
        <Box className={styles.section_title}>
          <Typography component="h4">Product Page List</Typography>
        </Box>
        <Box className={styles.show_row}>
          <ListCategoriAside />
          <Box className={styles.shop_toolbar_wrapper}>
            <FormControl variant="filled" color="secondary" className={styles.select_option}>
              <InputLabel id="select-label"></InputLabel>
              <NativeSelect
                defaultValue={10}
                inputProps={{
                  name: "sort",
                  id: "select-filled",
                }}
              >
                <option value={10}>Sort by average rating</option>
                <option value={20}>Sort by popularity</option>
                <option value={30}>Sort by newness</option>
                <option value={40}>Sort by price: low to high</option>
                <option value={50}>Sort by price: high to low</option>
              </NativeSelect>
            </FormControl>
            <ProductArea />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ListProduct;
