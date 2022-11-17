import {
  Add,
  FacebookOutlined,
  InsertLink,
  Loyalty,
  Pinterest,
  Public,
  Remove,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Rating,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import BrandArea from "../../../components/BrandArea";
import CartDrawer from "../../../components/CartDrawer";
import Description from "../../../components/Description";
import RelatedProduct from "../../../components/RelatedProduct";
import ScrollButton from "../../../components/ScrollButton";
import { addToCart } from "../../../features/CartSlice/cartSlice";
import toastr from "toastr";
import styles from "./styles.module.css";
import { getProduct } from "../../../api/product";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({});
  document.title = "Product" + id;

  const handleIncrease = () => {
    if (count >= 10) {
      toastr.warning("You can only choose up to 10 products");

      return;
    }
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count <= 1) {
      toastr.warning("You can only choose positive products");

      return;
    }
    setCount(count - 1);
  };

  const handleAddToCart = ({ quantity, ...arg }) => {
    dispatch(addToCart({ ...arg, quantity: count }));
    toastr.success("Add to cart successfully");
  };

  const gettProduct = async (id) => {
    const { data: detailProduct } = await getProduct(id);
    setProduct(detailProduct);
  };

  useEffect(() => {
    gettProduct(id);
  }, [id]);

  return (
    <div>
      <ScrollButton showBelow={300} />
      {product ? (
        <Box component="section" className={styles.product_detail_area}>
          <Box className={styles.section_title}>
            <Typography component="h4">Detail Product Page</Typography>
          </Box>
          <Box className={styles.product_main}>
            <Box className={styles.product_item}>
              <Box className={styles.product_images}>
                <Box className={styles.product_thumb}>
                  <Typography component="a" href="#" target="_blank">
                    <Box
                      className={styles.main_image}
                      component="img"
                      alt="Logo-product"
                      src={product.image}
                    />
                  </Typography>
                </Box>
                <Box className={styles.gallery_img}>
                  {imgs.map(({ image, index }) => (
                    <Grid key={index} className={styles.gallery_item}>
                      <Typography component="a" href="#" target="_blank">
                        <Box component="img" alt="Logo-product" src={image} />
                      </Typography>
                    </Grid>
                  ))}
                </Box>
              </Box>
              <Box className={styles.product_content}>
                <Box className={styles.content_header}>
                  <Typography component="h1">{product.name}</Typography>
                  <Rating name="read-only" value={5} readOnly />
                  <Box className={styles.price_box}>
                    <Typography component="span" className={styles.current_price}>
                      {product.price}$
                    </Typography>
                    <Typography component="span" className={styles.old_price}>
                      {product.oldPrice}$
                    </Typography>
                  </Box>
                  <Typography component="span" className={styles.product_desc}>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit
                    assumenda rerum officiis sit illo facere, consectetur facilis aliquid iste
                    beatae, accusamus debitis? Illum officiis quae impedit quam, odit eos!"
                  </Typography>
                </Box>
                <Box className={styles.content_button}>
                  <Box className={styles.product_variant}>
                    <Box className={styles.product_option}>
                      <Typography component="h3">Available Options</Typography>
                      <ToggleButtonGroup exclusive aria-label="text alignment">
                        <ToggleButton value="red" className={styles.red}></ToggleButton>
                        <ToggleButton value="blue" className={styles.blue}></ToggleButton>
                        <ToggleButton value="green" className={styles.green}></ToggleButton>
                        <ToggleButton value="yellow" className={styles.yellow}></ToggleButton>
                      </ToggleButtonGroup>
                    </Box>
                    <Box className={styles.subscribe_form}>
                      <IconButton
                        aria-label="remove quantity"
                        color="secondary"
                        onClick={handleDecrease}
                      >
                        <Remove />
                      </IconButton>
                      <TextField id="form_input" min={1} max={100} value={count} label="Quantity" />
                      <IconButton
                        aria-label="add quantity"
                        color="secondary"
                        onClick={handleIncrease}
                      >
                        <Add />
                      </IconButton>
                      <Tooltip title="Add to favorite" className={styles.add_favor}>
                        <Typography component="a" href="#" target="_blank">
                          <Loyalty fontSize="large" />
                        </Typography>
                      </Tooltip>
                      <Button
                        variant="contained"
                        className={styles.add_cart}
                        onClick={() => {
                          handleAddToCart(product);
                        }}
                      >
                        Add to cart
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.content_footer}>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      className={styles.facebook}
                      startIcon={<FacebookOutlined fontSize="small" />}
                    >
                      Like
                    </Button>
                    <Button variant="contained" className={styles.twitter} startIcon={<Twitter />}>
                      Tweet
                    </Button>
                    <Button
                      variant="contained"
                      className={styles.pinterest}
                      startIcon={<Pinterest />}
                    >
                      Save
                    </Button>
                    <Button variant="contained" className={styles.public} startIcon={<Public />}>
                      Share
                    </Button>
                    <Button
                      variant="contained"
                      className={styles.linkedin}
                      startIcon={<InsertLink />}
                    >
                      Linked
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        "loading"
      )}
      <Description />
      <RelatedProduct />
      <BrandArea />
      <CartDrawer />
    </div>
  );
};

const imgs = [
  {
    index: 0,
    image: "https://htmldemo.net/lukani/lukani/assets/img/product/product1.jpg",
  },
  {
    index: 1,
    image: "https://htmldemo.net/lukani/lukani/assets/img/product/product2.jpg",
  },
  {
    index: 2,
    image: "https://htmldemo.net/lukani/lukani/assets/img/product/product5.jpg",
  },
  {
    index: 3,
    image: "https://htmldemo.net/lukani/lukani/assets/img/product/product4.jpg",
  },
];

export default ProductDetail;
