import React from "react";
import CartDrawer from "../../../components/CartDrawer";
import NewsLetter from "../../../components/NewsLetter";
import Banner from "../../../components/Slider";
import StoreTitle from "../../../components/StoreTitle";
import TestimonialArea from "../../../components/TestimonialArea";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <StoreTitle />
      <TestimonialArea />
      <NewsLetter />
      <CartDrawer/>
    </div>
  );
};

export default HomePage;
