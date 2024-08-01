import { createContext, useState } from "react";

export const AppContext = createContext("");

const AppContextProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState({
    subTotal: 0,
    total: 0,
  });

  const state = {
    cartData,
    total,
  };

  const setDataToCart = (value) => {
    const productItem = cartData?.findIndex((item) => item?.id === value?.id);
    // [sad,dasda,] -> 3
    if (productItem > -1) {
      const updatePayload = {
        ...cartData[productItem],
        quantity: cartData[productItem]?.quantity + 1,
        subTotal: cartData[productItem]?.subTotal + value?.price,
      };
      cartData?.splice(productItem, 1, updatePayload);
    } else {
      const payload = {
        ...value,
        quantity: 1,
        subTotal: value?.price,
      };
      setCartData((prevState) => [...prevState, payload]);
    }
    setTotal((prevState) => ({
      subTotal: prevState?.subTotal + value?.price,
      total: prevState?.total + value?.price,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setDataToCart: setDataToCart,
      }}
    >
      {/* APP */}
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
