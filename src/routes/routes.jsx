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
import StoreAdmin from "../pages/Admin";
import ResetPassword from "../pages/Client/ResetPassword";
import UserDetail from "../pages/Client/UserDetail";
import Checkout from "../pages/Client/CheckOut";
import Payment from "../pages/Client/CheckOut/Payment";
import Success from "../pages/Client/CheckOut/Success";
import ScrollToTop from "../components/ScrollToTop";
import Protected from "../components/Protected";
import Category from "../pages/Client/Category";

const MainRoutes = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path={Path.about} element={<AboutPage />} />
          <Route path={Path.contact} element={<ContactUs />} />
          <Route path={Path.productList}>
            <Route index element={<ListProduct />} />
            <Route path={Path.productDetail} element={<ProductDetail />} />
          </Route>
          <Route path={Path.categoryDetail} element={<Category />} />
          <Route path={Path.cart} element={<CartPage />} />
          <Route path={Path.success} element={<Success />} />
          <Route path={Path.checkOut} element={<Checkout />} />
          <Route path={Path.payment} element={<Payment />} />
          <Route path={Path.login} element={<Login />} />
          <Route path={Path.signUp} element={<SignUp />} />
          <Route path={Path.resetPassword} element={<ResetPassword />} />
          <Route path={Path.userDetail} element={<UserDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="/admin/*"
          element={
            <Protected>
              <StoreAdmin />
            </Protected>
          }
        />
      </Routes>
    </ScrollToTop>
  );
};

export default MainRoutes;
