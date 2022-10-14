import React from "react";
import styles from "./styles.module.css";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import products from "../../../constants/products";
import BrandArea from "../../../components/BrandArea";

const CartPage = () => {
  return (
    <div>
      <Box className={styles.cart_page_area}>
        <TableContainer component={Paper} elevation={3} className={styles.table_responsive}>
          <Table aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell>Delete</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Qty.</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map(
                ({ name, price, image, rate, index }) =>
                  index < 4 && (
                    <TableRow key={index}>
                      <TableCell align="center">
                        <IconButton>
                          <DeleteOutline />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        <img src={image} alt="img" width="100px" />
                      </TableCell>
                      <TableCell align="center">{name}</TableCell>
                      <TableCell align="center" className={styles.product_price}>
                        {price}
                      </TableCell>
                      <TableCell align="center">{rate}</TableCell>
                      <TableCell align="center">$700</TableCell>
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
          <Box className={styles.cart_submit}>
            <Button>update cart</Button>
          </Box>
        </TableContainer>
        <Box className={styles.coupon_area}>
          <Box component={Paper} elevation={3} className={styles.coupon_left}>
            <Typography component="h3">Coupon</Typography>
            <Box component="form" noValidate autoComplete="off" className={styles.coupon_inner}>
              <Typography component="p">Enter your coupon code if you have one.</Typography>
              <TextField id="code" color="secondary" label="Coupon Code" variant="outlined" />
              <Button>Apply Coupon</Button>
            </Box>
          </Box>
          <Box component={Paper} elevation={3} className={styles.coupon_right}>
            <Typography component="h3">Cart Totals</Typography>
            <Box className={styles.coupon_inner}>
              <Box className={styles.cart_subtotal}>
                <Typography component="p">Subtotal</Typography>
                <Typography component="p" className={styles.cart_amount}>
                  $215.00
                </Typography>
              </Box>
              <Box className={styles.cart_subtotal}>
                <Typography component="p">Shipping</Typography>
                <Typography component="p" className={styles.cart_amount}>
                  $15.00
                </Typography>
              </Box>
              <Typography component="a" href="#" target="_blank">
                Caculate Shipping
              </Typography>
              <Box className={styles.cart_subtotal}>
                <Typography component="p">Total</Typography>
                <Typography component="p" className={styles.cart_amount}>
                  $230.00
                </Typography>
              </Box>
              <Box className={styles.checkout_btn}>
                <Button>Proceed to Checkout</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <BrandArea />
    </div>
  );
};

export default CartPage;
