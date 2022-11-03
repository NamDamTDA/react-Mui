import {
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CartDrawer from "../../../components/CartDrawer";
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
        </Box>

        <ProductArea />
        <Stack spacing={2} className={styles.select_option}>
          <Pagination count={5} color="secondary" />
        </Stack>
      </Box>
    </div>
  );
};

export default ListProduct;
