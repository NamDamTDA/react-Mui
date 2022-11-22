import { Box, Grid, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Button } from "react-admin";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import toastr from "toastr";
import { getOneCategory } from "../../../api/category";
import ListCategoriAside from "../../../components/CategoriAside";
import { addToCart } from "../../../features/CartSlice/cartSlice";
import styles from "./styles.module.css";

const Category = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);

  document.title = "Category " + id;

  const getCategory = async (id) => {
    const { data } = await getOneCategory(id);
    setCategory(data);
    setProducts(data.products);
  };

  useEffect(() => {
    getCategory(id);
  }, [id]);

  return category ? (
    <>
      <div className={styles.section_title}>
        <h4>
          <b>Home</b> <span>|</span> {category.name}
        </h4>
      </div>
      <div className={styles.show_row}>
        <ListCategoriAside />

        <div className={styles.product}>
          <h2>Products</h2>
          <div className={styles.list_product}>
            {products.length > 0 ? (
              products.map((product) => (
                <Grid key={product.id} className={styles.product_item}>
                  <Box className={styles.product_thumb}>
                    <Link to={`/products/${product.id}`}>
                      <Box component="img" alt="Logo-product" src={product.image} />
                    </Link>
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
              ))
            ) : (
              <img
                src="https://cdn.dribbble.com/users/634336/screenshots/2246883/media/21b6eeac8c36a79c6b4b2a1930bd89a6.png"
                alt="Data Not Found"
                className={styles.no_data_image}
              />
            )}
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Category;
