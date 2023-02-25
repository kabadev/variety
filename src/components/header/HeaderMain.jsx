import React from "react";
import { useContext } from "react";
import {
  IoSearchOutline,
  IoPersonOutline,
  IoHeartOutline,
  IoBagHandleOutline,
} from "react-icons/io5";
import { AppContext } from "../../App";

import Logo from "../../img/aficva.png";
const HeaderMain = () => {
  const { cartCount } = useContext(AppContext);
  return (
    <div className="header-main">
      <div className="container">
        <a href="#" className="header-logo">
          <img src={Logo} alt="Mabalka's logo" height="36" />
        </a>

        <div className="header-search-container">
          <input
            type="search"
            name="search"
            className="search-field"
            placeholder="Enter your product name..."
          />

          <button className="search-btn">
            <IoSearchOutline />
          </button>
        </div>

        <div className="header-user-actions">
          {/* <button className="action-btn">
            <IoPersonOutline />
          </button> */}

          <div className="profile_image">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>

          <button className="action-btn">
            <IoHeartOutline />
            <span className="count">0</span>
          </button>

          <button className="action-btn">
            <IoBagHandleOutline />
            <span className="count">{cartCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
