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
import BrandArea from "../../../components/BrandArea";
import { useDispatch, useSelector } from "react-redux";
import { cartTotalPriceSelector } from "../../../features/CartSlice/selectors";
import { deleteItem } from "../../../features/CartSlice/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

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
              {cart.map((cartItem) => (
                <TableRow key={cartItem.id}>
                  <TableCell align="center">
                    <IconButton
                      onClick={() => {
                        dispatch(deleteItem(cartItem.id));
                      }}
                    >
                      <DeleteOutline />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <img src={cartItem.image} alt="img" width="100px" />
                  </TableCell>
                  <TableCell align="center">{cartItem.name}</TableCell>
                  <TableCell align="center" className={styles.product_price}>
                    {cartItem.price}$
                  </TableCell>
                  <TableCell align="center">{cartItem.quantity}</TableCell>
                  <TableCell align="center">{cartItem.quantity * cartItem.price}$</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
                  {totalPrice}$
                </Typography>
              </Box>
              <Box className={styles.cart_subtotal}>
                <Typography component="p">Shipping</Typography>
                <Typography component="p" className={styles.cart_amount}>
                  15$
                </Typography>
              </Box>
              <Typography component="a" href="#" target="_blank">
                Calculate Shipping
              </Typography>
              <Box className={styles.cart_subtotal}>
                <Typography component="p">Total</Typography>
                <Typography component="p" className={styles.cart_amount}>
                  {totalPrice + 15}$
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
