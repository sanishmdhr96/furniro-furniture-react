import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripeLoad = loadStripe(
  "pk_test_51Hb0ziErBaMzSa2iUNZjQfnJ3MRPwlF9UoYg0GISzr4vkXQb9KhaQ7c7HsStVflUzHBhl1F19R3sjLpkxNETa42M00mGpeSQfY"
);

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/cart"
          element={
            <Elements stripe={stripeLoad}>
              <Cart />
            </Elements>
          }
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
