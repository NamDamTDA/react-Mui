/* eslint-disable react-hooks/exhaustive-deps */
import { SearchOutlined } from "@mui/icons-material";
import { Box, Button, CircularProgress, Modal, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./styles.module.css";
import debounce from "lodash.debounce";
import { searchProduct } from "../../api/product";

const SearchModal = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleNavigate = (idProduct) => {
    navigate(`/products/${idProduct}`);
    setProducts(undefined);
    setOpen(false);
  };
  const updateKeyword = (e) => setKeyword(e.target.value);
  const handleChangeInput = debounce(updateKeyword, 50);

  const searchProductt = async (keyword) => {
    try {
      setLoading(true);
      const { data } = await searchProduct(keyword);
      setProducts(data);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (keyword.trim() !== "" && keyword !== undefined) {
      searchProductt(keyword);
    } else {
      setProducts(undefined);
    }
  }, [keyword]);
  return (
    <>
      <Tooltip title="Search" className={styles.header_account_list}>
        <Button onClick={handleOpen}>
          <SearchOutlined fontSize="large" />
        </Button>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.style_modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Insert your keyword
          </Typography>
          <input
            className={styles.input_search}
            placeholder="What do you need ?"
            onKeyUp={handleChangeInput}
          />
          {loading ? <CircularProgress className={styles.loading} /> : null}
          {products && (
            <div className={styles.list_product_search}>
              {products.map((product, rowIndex) => (
                <div className={styles.product_item} key={rowIndex}>
                  <div>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div onClick={() => handleNavigate(product.id)}>
                    <span className={styles.name}>{product.name}</span>
                    <p className={styles.price}>${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {products?.length === 0 && (
            <div className={styles.list_product_search}>
              <p className={styles.no_result}>No results</p>
              <span>Please enter another keyword</span>
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default SearchModal;
