import React, { useContext } from "react";

import "../styles/cart.scss";

import { AppContext } from "../context";
import SubHeroSection from "../component/common/SubHeroSection";
import Container from "../layout/Container";

function Cart() {
  const { cartData, total } = useContext(AppContext);

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
      </Container>
      {/* Services band */}

      {/* */}
    </React.Fragment>
  );
}

export default Cart;
