import React from "react";
import { Navigate, Route, Routes } from "react-router";
import NotFound from "../components/NotFound";
import AdminLayout from "../layouts/AdminLayout";
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

      <Route path={Path.admin} element={<AdminLayout />}>
        <Route index element={<Navigate to={Path.productsManager} />} />
        <Route path={Path.productsManager}>
          <Route index element={<h1>ManagerProducts</h1>} />
          <Route path="add" element={<h1>AddProductPage</h1>} />
          <Route path="edit/:id" element={<h1>EditProduct</h1>} />
        </Route>
        <Route path="categories">
          <Route index element={<h1>ManagerCategory</h1>} />
          <Route path="add" element={<h1>AddProductPage</h1>} />
          <Route path="edit/:id" element={<h1>EditProduct</h1>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MainRoutes;
