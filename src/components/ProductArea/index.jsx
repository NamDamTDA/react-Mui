import React, { useEffect } from "react";
import { Box, Button, Grid, Rating, Skeleton, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/CartSlice/productsSlice";
import { addToCart } from "../../features/CartSlice/cartSlice";

const ProductArea = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {products.loading && <Skeleton variant="rectangular" className={styles.product_loading}/>}
      <Box component="section" className={styles.product_area}>
        <Box className={styles.product_container}>
          <Box className={`${styles.row}`}>
            {products.list.map((product) => (
              <Grid key={product.id} className={styles.product_item}>
                <Box className={styles.product_thumb}>
                  <Typography component="a" href="#" target="_blank">
                    <Box component="img" alt="Logo-product" src={product.image} />
                  </Typography>
                  <Box className={styles.label_product}>
                    <Typography component="span" className={styles.label_sale}>
                      {product.sale}
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.product_content}>
                  <Rating name="read-only" value={product.rate} readOnly />
                  <Typography component="h4">{product.name}</Typography>
                  <Box className={styles.price_box}>
                    <Typography component="span" className={styles.current_price}>
                      ${product.price}
                    </Typography>
                    <Typography component="span" className={styles.old_price}>
                      ${product.oldPrice}
                    </Typography>
                  </Box>
                  <Button className={styles.add_cart}
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Grid>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProductArea;
