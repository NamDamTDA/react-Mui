import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "../components/NotFound";
import WebsiteLayout from "../layouts/WebsiteLayout";
import CartPage from "../pages/Client/Cart";
import HomePage from "../pages/Client/HomePage/HomePage";
import ListProduct from "../pages/Client/ListProduct";
import Login from "../pages/Client/SignIn";
import ProductDetail from "../pages/Client/ProductDetail";
import Path from "./contants";
import SignUp from "../pages/Client/SignUp";
import AboutPage from "../pages/Client/AboutPage";
import ContactUs from "../pages/Client/ContactUs";
import StoreAdmin from "../pages/Backend";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path={Path.about} element={<AboutPage />} />
        <Route path={Path.contact} element={<ContactUs />} />
        <Route path={Path.productList}>
          <Route index element={<ListProduct />} />
          <Route path={Path.productDetail} element={<ProductDetail />} />
        </Route>
        <Route path={Path.cart} element={<CartPage />} />
        <Route path={Path.login} element={<Login />} />
        <Route path={Path.signUp} element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/admin/*" element={<StoreAdmin />} />
    </Routes>
  );
};

export default MainRoutes;
