import React from "react";
import Header from "./Header";
import AppContextProvider from "../context";
import "../styles/global.scss";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <AppContextProvider>
      <Header />
      {children}
      <Footer />
    </AppContextProvider>
  );
}

export default Layout;