import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const WebsiteLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default WebsiteLayout;
