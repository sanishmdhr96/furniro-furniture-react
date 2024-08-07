import React, { useContext } from "react";
import Icon from "../../ui/icons";
import { AppContext } from "../../../context";
import { showToastMessage } from "../../ui/ToastMessage";

function ProductItem({ id, imgUrl, title, category, price }) {
  const { setDataToCart } = useContext(AppContext);

  const addToCart = () => {
    const payload = {
      id,
      imgUrl,
      title,
      price,
    };

    setDataToCart(payload);
    showToastMessage({
      message: "Product has been added to the cart",
      type: "success",
      position: "bottom-right",
    });
  };

  return (
    <div className="product--item">
      <div className="image-container">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="product-description">
        <h3 className="text--h3">{title}</h3>
        <p className="text--md">{category}</p>
        <p className="text--subtitle">Nrs. {price}</p>
      </div>

      <div className="product-overlay">
        <div className="action-container">
          <button className="btn-light" onClick={addToCart}>
            Add to Cart
          </button>
          <ul className="share-options">
            <li>
              <Icon.Share /> Share
            </li>
            <li>
              <Icon.Compare /> Compare
            </li>
            <li>
              <Icon.Heart /> Like
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
