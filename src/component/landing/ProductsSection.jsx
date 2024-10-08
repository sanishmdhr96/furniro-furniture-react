import React, { useContext, useEffect } from "react";
import Container from "../../layout/Container";
import SectionTitle from "../../layout/SectionTitle";
import { AppContext } from "../../context";
import { useDispatch, useSelector } from "react-redux";

import "../../styles/product.scss";

import { useEffectOnce } from "../../lib/useEffectOnce";
import ProductItem from "../common/products/ProductItem";
import { fetchProductList } from "../../duck/products/service";
import ContentLoader from "react-content-loader";
import { useGetProducts } from "../../hooks/useProducts";

function ProductsSection({ limit = 20 }) {
  // THE REDUX WAY
  // console.log("limit product", limit);
  // const dispatch = useDispatch();

  // const { products, productsLoading } = useSelector((state) => {
  //   return {
  //     products: state.product.payload,
  //     productsLoading: state.product.loading,
  //   };
  // });

  // // useEffectOnce(() => {
  // //   console.log("useeffect 12", limit);
  // // }, [limit]);

  // useEffect(() => {
  //   dispatch(fetchProductList({ limit }));
  // }, [limit]);

  // REACT QUERY WAY

  // pending, data, error
  const {
    isPending: productsLoading,
    data: products,
    error: productError,
  } = useGetProducts({ limit });

  console.log("value", products);
  console.log("productError", productError);

  return (
    <section>
      <Container>
        <SectionTitle title={"Our Products"} />
        <div className="products">
          {productsLoading ? (
            <ContentLoader viewBox="0 0 1360 900" height={900} width={1360}>
              <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
              <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
              <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
              <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
              <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
              <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
              <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
              <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
              <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
            </ContentLoader>
          ) : products?.length > 0 ? (
            products?.map((item) => (
              <ProductItem
                key={item?.id}
                id={item?.id}
                title={item?.title}
                price={item?.price}
                imgUrl={item?.image}
                category={item?.category}
              />
            ))
          ) : (
            <p>No data</p>
          )}

          <div className="action-container">
            <button className="btn-light">Show More</button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProductsSection;
