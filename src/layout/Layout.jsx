import React from "react";
import Header from "./Header";
import AppContextProvider from "../context";
import "../styles/global.scss";
import Footer from "./Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Layout({ children }) {
  const client = new QueryClient();

  return (
    <AppContextProvider>
      <QueryClientProvider client={client}>
        <Header />
        {children}
        <Footer />
        <ToastContainer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AppContextProvider>
  );
}

export default Layout;
