import React from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Face3Icon from "@mui/icons-material/Face3";
import { FavoriteBorder, SearchOutlined, ShoppingCartSharp } from "@mui/icons-material";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartTotalSelector } from "../../features/CartSlice/selectors";
import { toggle } from "../../features/CartSlice/uiSlice";

const pages = ["Products", "About", "Blog", "Contact"];
const icons = [
  {
    title: "Search",
    icon: <SearchOutlined fontSize="large" />,
  },
  {
    title: "Open settings",
    icon: <Face3Icon fontSize="large" />,
  },
  {
    title: "Favorite",
    icon: <FavoriteBorder fontSize="large" />,
  },
  // {
  //   title: "Cart",
  //   icon: <LocalMallOutlined fontSize="large" />,
  // },
];

const Header = () => {
  const total = useSelector(cartTotalSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <Box component="header" className={`${styles.header_transparent} ${styles.sticky_header}`}>
        <Container className={styles.container}>
          <Toolbar disableGutters className={styles.row}>
            <Box className={styles.main_menu}>
              {pages.map((page) => (
                <Button key={page} className={styles.menu_item} color="success">
                  {page}
                </Button>
              ))}
            </Box>
            <Box
              className={styles.logo}
              component="img"
              alt="Logo"
              src="https://htmldemo.net/lukani/lukani/assets/img/logo/logo.png"
            />
            <Box className={styles.header_right}>
              {icons.map(({ title, icon, items }) => (
                <Tooltip title={title} key={title} className={styles.header_account_list}>
                  <Typography component="a" href="#" target="_blank">
                    {icon}
                  </Typography>
                </Tooltip>
              ))}
              <IconButton
                className={styles.header_cart}
                aria-label="cart"
                onClick={() => {
                  dispatch(toggle());
                }}
              >
                <Badge badgeContent={total} color="secondary">
                  <ShoppingCartSharp fontSize="large" />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </div>
  );
};

export default Header;
