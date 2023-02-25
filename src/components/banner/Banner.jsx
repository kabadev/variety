import React from "react";
import "./banner.css";
import banner1 from "../../img/52d8be53a0803ab04ff37015623b73d6.jpg";
import banner2 from "../../img/292dac673180421dd82dcb16d2c938a2.jpg";
import banner3 from "../../img/f5db7dba8e462f2bdfe78e69a2f61ebc.jpg";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          <div className="slider-item">
            <img src={banner2} alt="modern sunglasses" className="banner-img" />

            <div className="banner-content">
              <p className="banner-subtitle">Trending item</p>

              <h2 className="banner-title">Latest African fashion sale</h2>

              <a href="#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>

          <div className="slider-item">
            <img src={banner1} alt="modern sunglasses" className="banner-img" />

            <div className="banner-content">
              <p className="banner-subtitle">Body Care</p>

              <h2 className="banner-title">Modern Body care Product</h2>

              <a href="#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>

          <div className="slider-item">
            <img src={banner3} alt="modern sunglasses" className="banner-img" />

            <div className="banner-content">
              <p className="banner-subtitle">Best African Food</p>

              <h2 className="banner-title">High Quality African Food</h2>

              <a href="#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
