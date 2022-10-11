import React from "react";
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
    </div>
  );
};

export default HomePage;
