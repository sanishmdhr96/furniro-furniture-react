import React, { useContext } from "react";
import { AppContext } from "../context";

function Cart() {
  const { cartData } = useContext(AppContext);

  console.log(cartData);

  return (
    <React.Fragment>
      <table>
        <thead>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Sub Total</th>
        </thead>
        <tbody>
          {cartData?.map((item) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.subTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Cart;
