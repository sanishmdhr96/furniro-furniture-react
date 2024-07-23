import { createContext, useState } from "react";

export const AppContext = createContext("");

const AppContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  const [username, setUsername] = useState("");
  const state = {
    products,
    username,
  };

  async function fetchProducts() {
    try {
      const data = await fetch("https://fakestoreapi.com/products?limit=16");
      const response = await data.json();
      console.log(response);
      if (response?.length > 0) {
        setProducts((prevState) => [...prevState, ...response]);
      }
    } catch (e) {}
  }

  const addUsername = () => {
    setUsername("Manish");
  };
  s;
  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchProductsList: fetchProducts,
        addUsername: addUsername,
      }}
    >
      {/* APP */}
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
