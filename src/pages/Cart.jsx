import React, { useContext, useEffect, useState } from "react";

import "../styles/cart.scss";

import { AppContext } from "../context";
import SubHeroSection from "../component/common/SubHeroSection";
import Container from "../layout/Container";
import { CardElement } from "@stripe/react-stripe-js";

import axios from "../axios";

function Cart() {
  const { cartData, total } = useContext(AppContext);

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(false);

  const handleFormSubmit = (event) => {};

  // detect changes in the card form
  const handleChange = (event) => {
    console.log(event);
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `/payments/create?total=${total?.total * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    if (total?.total > 0) {
      getClientSecret();
    }
  }, [total]);

  console.log("client secret", clientSecret);

  return (
    <React.Fragment>
      {/* Hero section */}
      <SubHeroSection module={"Cart"} />
      {/* Table for cart and checkout */}
      <Container>
        <section className="cart-table-section">
          <table>
            <thead>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub Total</th>
            </thead>
            <tbody>
              {cartData?.map((item) => (
                <tr>
                  <td>
                    <img src={item.imgUrl} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.subTotal}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-total">
            <h3>Cart Totals</h3>
            <div className="cart-total--row">
              <label>Sub Total</label>
              <p className="sub-total">{total?.subTotal}</p>
            </div>
            <div className="cart-total--row">
              <label>Total</label>
              <p className="total">{total?.total}</p>
            </div>
            <button>Checkout</button>
          </div>
        </section>

        <form>
          <CardElement onChange={handleChange} />

          <button onClick={handleFormSubmit}>Pay now</button>
        </form>
      </Container>
      {/* Services band */}

      {/* */}
    </React.Fragment>
  );
}

export default Cart;
