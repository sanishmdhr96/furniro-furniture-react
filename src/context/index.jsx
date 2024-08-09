import { createContext, useState } from "react";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "../utils/storage";

export const AppContext = createContext("");

const AppContextProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const [cartTotalItems, setCartTotalItems] = useState(0);
  const [total, setTotal] = useState({
    subTotal: 0,
    total: 0,
  });

  const state = {
    cartData,
    total,
    cartTotalItems,
  };

  const setDataToCart = (value) => {
    const cartItemsData = getItemFromLocalStorage("cartData");
    const cartTotalAmount = getItemFromLocalStorage("total");
    const productItem = cartData?.findIndex((item) => item?.id === value?.id);

    // [sad,dasda,] -> 3
    if (productItem > -1) {
      const updatePayload = {
        ...cartData[productItem],
        quantity: cartData[productItem]?.quantity + 1,
        subTotal: cartData[productItem]?.subTotal + value?.price,
      };
      cartItemsData?.splice(productItem, 1, updatePayload);
      localStorage.setItem("cartData", JSON.stringify(cartItemsData));
      fetchCartData();
    } else {
      const payload = {
        ...value,
        quantity: 1,
        subTotal: value?.price,
      };

      console.log("cartItemsData", cartItemsData);
      if (cartItemsData?.length > 0) {
        const data = [...cartItemsData, payload];
        setItemToLocalStorage("cartData", data);
      } else {
        const data = [payload];
        setItemToLocalStorage("cartData", data);
      }
      fetchCartData();
      // add to local storage
    }

    const data = {
      subTotal: cartTotalAmount?.subTotal + value?.price,
      total: cartTotalAmount?.total + value?.price,
    };
    setItemToLocalStorage("total", data);
    fetchCartData();
  };

  const fetchCartData = () => {
    const cartItemsData = getItemFromLocalStorage("cartData");
    const cartTotalAmount = getItemFromLocalStorage("total");
    setCartTotalItems(cartItemsData?.length);
    setCartData(cartItemsData);
    setTotal(cartTotalAmount);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setDataToCart: setDataToCart,
        fetchCartData: fetchCartData,
      }}
    >
      {/* APP */}
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
