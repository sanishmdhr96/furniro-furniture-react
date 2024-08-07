import React, { useContext } from "react";

import "../styles/layout/header.scss";

import Logo from "../assets/logo.webp";
import FavIcon from "../assets/icons/akar-icons_heart.png";
import SearchIcon from "../assets/icons/akar-icons_search.png";
import AlertIcon from "../assets/icons/mdi_account-alert-outline.png";
import CartIcon from "../assets/icons/ant-design_shopping-cart-outlined.png";
import { useEffectOnce } from "../lib/useEffectOnce";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsername } from "../duck/users/service";
import { AppContext } from "../context";
import { Link } from "react-router-dom";

function Header() {
  // const dispatch = useDispatch();
  // const { username } = useSelector((state) => ({
  //   username: state.user.username,
  // }));

  // useEffectOnce(() => {
  //   dispatch(fetchUsername());
  // }, []);

  const { cartData } = useContext(AppContext);

  return (
    <React.Fragment>
      <header>
        {/* Add Logo for the website  */}
        <img src={Logo} alt="Logo" className="logo" />
        {/* Add Nav Links for the website  */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="#">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        {/* Add CTAs  */}
        <div className="cta">
          <img src={AlertIcon} alt="Account Alert" />
          <img src={SearchIcon} alt="Search Icon" />
          <img src={FavIcon} alt="Fav" />
          <Link to={"/cart"} className="cart-link">
            <img src={CartIcon} alt="Cart" /> <span>{cartData?.length}</span>
          </Link>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
