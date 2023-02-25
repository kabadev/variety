import React from "react";
import HeaderMain from "./HeaderMain";
import HeaderTop from "./HeaderTop";
import Navigations from "./Navigations";
import "./header.css";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderMain />
      <Navigations />
    </header>
  );
};

export default Header;
