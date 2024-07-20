import React from "react";
import "../styles/home.scss";
import HeroSection from "../component/landing/HeroSection";
import CategorySection from "../component/landing/CategorySection";
import ProductsSection from "../component/landing/ProductsSection";

function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <CategorySection />
      <ProductsSection />
    </React.Fragment>
  );
}

export default Home;
