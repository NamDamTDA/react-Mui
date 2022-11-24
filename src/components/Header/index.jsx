import React, { useEffect, useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import Face3Icon from "@mui/icons-material/Face3";
import { Menu, ShoppingBasket, ShoppingCartSharp } from "@mui/icons-material";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartTotalSelector } from "../../features/CartSlice/selectors";
import { toggle } from "../../features/CartSlice/uiSlice";
import { Link } from "react-router-dom";
import Path from "../../routes/contants";
import SearchModal from "../Search";

const Header = () => {
  const total = useSelector(cartTotalSelector);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;
  const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));
  const handleCart = () => {
    handleDrawerClose();
    dispatch(toggle());
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={styles.row}>
        {imgLogo}
        {getMenuButtons()}
        {getMenuIcons()}
      </Toolbar>
    );
  };

  const displayMobile = () => {
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "secondary",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
            className: styles.hamburger,
          }}
        >
          <Menu />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={styles.drawerContainer}>{getDrawerChoices()}</div>
          <div className={styles.drawerIcons}>{getMenuIcons()}</div>
        </Drawer>

        <div>{imgLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <Box className={styles.main_menu_drawer}>
        <Link to={Path.login}>Login</Link>
        <Link to={Path.productList}>Products</Link>
        <Link to={Path.about}>About Us</Link>
        <Link to={Path.contact}>Contact Us</Link>
      </Box>
    );
  };

  const getMenuButtons = () => {
    return (
      <Box className={styles.main_menu}>
        <Link to={Path.login}>Login</Link>
        <Link to={Path.productList}>Products</Link>
        <Link to={Path.about}>About Us</Link>
        <Link to={Path.contact}>Contact Us</Link>
      </Box>
    );
  };

  const imgLogo = (
    <Typography variant="h6" component="h1" className={styles.logo}>
      <Link to={Path.home}>
        <Box
          className={styles.logo}
          component="img"
          alt="Logo"
          src="https://htmldemo.net/lukani/lukani/assets/img/logo/logo.png"
        />
      </Link>
    </Typography>
  );

  const getMenuIcons = () => {
    return (
      <Box className={styles.header_right}>
        <SearchModal />
        <Tooltip title="User" className={styles.header_account_list}>
          <Link to="/user">
            <Face3Icon fontSize="large" />
          </Link>
        </Tooltip>
        <Tooltip title="Go to Cart" className={styles.header_account_list}>
          <Link to="/cart">
            <ShoppingBasket fontSize="large" />
          </Link>
        </Tooltip>
        <IconButton className={styles.header_cart} aria-label="cart" onClick={handleCart}>
          <Badge badgeContent={total} color="secondary">
            <ShoppingCartSharp fontSize="large" />
          </Badge>
        </IconButton>
      </Box>
    );
  };

  return (
    <>
      <header className={styles.sticky_header}>
        <AppBar className={styles.header}>{mobileView ? displayMobile() : displayDesktop()}</AppBar>
      </header>
    </>
  );
};

export default Header;
