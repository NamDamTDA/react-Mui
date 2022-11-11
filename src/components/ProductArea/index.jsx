import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Pagination, Rating, Skeleton, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/CartSlice/cartSlice";
import { Link } from "react-router-dom";
import { getListProducts } from "../../api/instance";
import toastr from "toastr";

const ProductArea = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const limitedProduct = 5;
  const indexOfLastProduct = currentPage * limitedProduct;
  const indexOfFirstProduct = indexOfLastProduct - limitedProduct;
  const count = Math.ceil(items.length / limitedProduct);
  const products = items.slice(indexOfFirstProduct, indexOfLastProduct);
  console.log(products);
  console.log(items);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  const gettProducts = async () => {
    const { data: listProduct } = await getListProducts();
    setItems(listProduct);
    setIsLoading(true);
  };

  useEffect(() => {
    gettProducts();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Box component="section" className={styles.product_area}>
          <Box className={styles.product_container}>
            <Box className={`${styles.row}`}>
              {products.map((product) => (
                <Grid key={product.id} className={styles.product_item}>
                  <Box className={styles.product_thumb}>
                    <Link to={`/products/${product.id}`}>
                      <Box component="img" alt="Logo-product" src={product.image} />
                    </Link>
                    <Box className={styles.label_product}>
                      <Typography component="span" className={styles.label_sale}>
                        {product.sale}%
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
                    <Button
                      className={styles.add_cart}
                      onClick={() => {
                        dispatch(addToCart(product));
                        toastr.success("Add to cart successfully");
                      }}
                    >
                      Add to cart
                    </Button>
                  </Box>
                </Grid>
              ))}
            </Box>
          </Box>
          <Stack spacing={2} className={styles.select_option}>
            <Pagination
              count={count || 10}
              page={currentPage}
              onChange={handleChange}
              color="secondary"
            />
          </Stack>
        </Box>
      ) : (
        <Skeleton variant="rectangular" className={styles.product_loading} />
      )}
    </div>
  );
};

export default ProductArea;
