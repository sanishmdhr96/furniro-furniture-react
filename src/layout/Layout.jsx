import React from "react";
import Header from "./Header";
import AppContextProvider from "../context";
import "../styles/global.scss";
import Footer from "./Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ children }) {
  return (
    <AppContextProvider>
      <Header />
      {children}
      <Footer />
      <ToastContainer />
    </AppContextProvider>
  );
}

export default Layout;
