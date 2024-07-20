import React, { useContext, useEffect } from "react";
import Container from "../../layout/Container";
import SectionTitle from "../../layout/SectionTitle";
import { AppContext } from "../../context";

import "../../styles/product.scss";

import { useEffectOnce } from "../../lib/useEffectOnce";
import ProductItem from "../Products/ProductItem";

function ProductsSection() {
  const { products, fetchProductsList } = useContext(AppContext);

  useEffectOnce(() => {
    fetchProductsList();
  }, []);
  return (
    <section>
      <Container>
        <SectionTitle title={"Our Products"} />
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

          <div className="action-container">
            <button className="btn-light">Show More</button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProductsSection;
