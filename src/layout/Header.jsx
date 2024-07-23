import React, { useContext } from "react";

import "../styles/layout/header.scss";

import Logo from "../assets/logo.png";
import FavIcon from "../assets/icons/akar-icons_heart.png";
import SearchIcon from "../assets/icons/akar-icons_search.png";
import AlertIcon from "../assets/icons/mdi_account-alert-outline.png";
import CartIcon from "../assets/icons/ant-design_shopping-cart-outlined.png";
import { useEffectOnce } from "../lib/useEffectOnce";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsername } from "../duck/users/service";
import { AppContext } from "../context";

function Header() {
  // const dispatch = useDispatch();
  // const { username } = useSelector((state) => ({
  //   username: state.user.username,
  // }));

  // useEffectOnce(() => {
  //   dispatch(fetchUsername());
  // }, []);
  const { username, addUsername } = useContext(AppContext);

  useEffectOnce(() => {
    addUsername();
  }, []);
  return (
    <React.Fragment>
      <header>
        {/* Add Logo for the website  */}
        <img src={Logo} alt="Logo" className="logo" />
        {/* Add Nav Links for the website  */}
        <nav>
          <a href="/">Home</a>
          <a href="shop.html">Shop</a>
          <a href="#">About</a>
          <a href="/contact.html">Contact</a>
        </nav>
        {/* Add CTAs  */}
        <div className="cta">
          <img src={AlertIcon} alt="Account Alert" />
          <img src={SearchIcon} alt="Search Icon" />
          <img src={FavIcon} alt="Fav" />
          <img src={CartIcon} alt="Cart" />
        </div>
        <p>Hi {username}</p>
      </header>
    </React.Fragment>
  );
}

export default Header;
