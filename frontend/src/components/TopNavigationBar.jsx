import React, { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

import '../styles/TopNavigationBar.scss';


const TopNavigation = ({ onLoginSelect, onRegisterSelect, isMenuOpen, toggleMenu, toggleFav, onOrderSelect}) => {
  const { auth, user, logout, order } = useContext(authContext);
// console.log(user, "user")
  return (
    <div className="top-nav-bar">
      <Link to='/'>
        <span className="top-nav-bar__logo">Charcoal & Cabernet</span>
      </Link>
      <div className="top-nav-bar__routes">
        <span className="top-nav-bar__item" onClick={toggleMenu}>
          Menu
        </span>
        <span className="top-nav-bar__item">Reservations</span>

        {!auth && <>
          <span className="top-nav-bar__item" order={order} onClick={()=> onLoginSelect()}  >Order</span>
          <span className="top-nav-bar__item" onClick={() => onLoginSelect()}>Login</span>
          <span className="top-nav-bar__item" onClick={() => onRegisterSelect()}>Register</span>
        </>}
        {auth && <>
          <span className="top-nav-bar__item" onClick={()=> onOrderSelect()}  >Order</span>
          <span className="top-nav-bar__item" onClick={toggleFav}>Favorites</span>

          <span className="top-nav-bar__item">Welcome back {user.first_name}</span>
          <span className="top-nav-bar__item" onClick={logout}>Logout</span>
        </>}
      </div>
    </div>
  );
};

export default TopNavigation;