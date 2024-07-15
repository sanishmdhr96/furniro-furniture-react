import React, { useEffect, useState } from "react";

import "../../styles/product.scss";

import ProductItem from "./ProductItem";

function Products() {
  // To list products

  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const response = await data.json();
      console.log(response);
      if (response?.length > 0) {
        setProducts((prevState) => [...prevState, ...response]);
      }
    } catch (e) {}
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  //   dependencies

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
