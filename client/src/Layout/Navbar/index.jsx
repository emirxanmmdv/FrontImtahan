import React from "react";
import { CiSearch, CiHeart, CiShoppingBasket } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <nav id="Navbar">
      <div className="topNavbarContainer">
        <div className="topNav">
          <div className="leftSide">
            <div className="searchIcon">
              <CiSearch />
            </div>
            <div className="navSearchInput">
              <input type="text" className="navInput" placeholder="Search" />
            </div>
          </div>
          <div className="middleSide">
            <div className="logo">
              <p>shoppers</p>
            </div>
          </div>
          <div className="rightSide">
            <div className="icons">
              <FaUser />
              <Link to={"/wishlist"}>
                <CiHeart />
                </Link>
              <Link to={"/basket"}>
              <CiShoppingBasket /></Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="bottomNav">
        <div className="bottomNavContainer">
          <ul className="Bars">
            <li>
              <NavLink to={"/"} className="firstBar">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Catalogue</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>New Arrivals</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/addpage"}>Add Page</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
