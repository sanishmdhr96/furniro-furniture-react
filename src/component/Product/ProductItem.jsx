import React from "react";

function ProductItem({ imgUrl, title, category, price }) {
  return (
    <div className="product--item">
      <div className="image-container">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="product-description">
        <h2>{title}</h2>
        <p>{category}</p>
        <h5>Nrs. {price}</h5>
      </div>
    </div>
  );
}

export default ProductItem;
