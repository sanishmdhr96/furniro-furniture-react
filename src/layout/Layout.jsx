import React from "react";
import Header from "./Header";
import AppContextProvider from "../context";

function Layout({ children }) {
  return (
    <AppContextProvider>
      <Header />
      {children}
      Footer
    </AppContextProvider>
  );
}

export default Layout;
