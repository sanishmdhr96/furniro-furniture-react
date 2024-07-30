import React, { useState } from "react";
import ShopFilter from "../component/shop/shopFilter";

import "../styles/shop.scss";
import ProductsSection from "../component/landing/ProductsSection";

function Shop() {
  const [limit, setLimit] = useState(20);

  return (
    <div>
      <ShopFilter setLimit={setLimit} limit={limit} />
      <ProductsSection limit={limit} />
    </div>
  );
}

export default Shop;
