import React from "react";
import { Navigate, Route, Routes } from "react-router";
import NotFound from "../components/NotFound";
import AdminLayout from "../layouts/AdminLayout";
import WebsiteLayout from "../layouts/WebsiteLayout";
import HomePage from "../pages/Client/HomePage/HomePage";
import ListProduct from "../pages/Client/ListProduct";
import ProductDetail from "../pages/Client/ProductDetail";
import Path from "./contants";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path={Path.about} element={<h1>About Page</h1>} />
        <Route path={Path.contact} element={<h1>Contact Page</h1>} />
        <Route path={Path.productList}>
          <Route index element={<ListProduct />} />
          <Route path={Path.productDetail} element={<ProductDetail />} />
        </Route>
        <Route path={Path.login} element={<h1>Login</h1>} />
        <Route path={Path.signUp} element={<h1>Signup</h1>} />
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
