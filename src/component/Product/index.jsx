import React, { useContext, useEffect, useState } from "react";

import "../../styles/product.scss";

import ProductItem from "./ProductItem";
import { AppContext } from "../../context";

function Products() {
  // To list products

  const { products, fetchProductsList } = useContext(AppContext);

  useEffect(() => {
    fetchProductsList();
  }, []);

  return (
    <div className="products">
      {products?.map((item) => (
        <ProductItem
          key={item?.id}
          title={item?.title}
          price={item?.price}
          imgUrl={item?.image}
          category={item?.category}
        />
      ))}
    </div>
  );
}

export default Products;
