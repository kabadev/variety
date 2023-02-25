// import "./home.css";

import "./order.css";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
function Order() {
  return (
    <div className="order">
      <Header />
      <main>
        <div className="product-container">
          <div className="container">
            <Sidebar />
            <div className="order_container">
              <h2 className="title">Order</h2>
              <div className="order_content">
                {/* product */}
                <div className="order_product">
                  <div className="order_product_image">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVT_egUuUGDHCpGEBlaKIUTmOTO31ywA5dkSvKNqe&s"
                      alt=""
                    />
                  </div>
                  <div className="order_product_info">
                    <h4 className="order_product_title">
                      This is the tile of the product
                    </h4>
                    <span className="order_product_price">$ 999</span>
                    <div className="amount">
                      <span className="delivery">
                        Quantity: <b>1</b>
                      </span>
                      {/* if shipping */}
                      <span className="delivery">
                        Pay: <b>$500</b>
                      </span>
                    </div>
                    <div className="status">
                      <span className="delivery">Shipping</span>
                      <span className="delivery">
                        <b>30 March 2020</b>
                      </span>
                    </div>
                    {/* if shipping */}
                    {/* if Delivered */}
                    {/* <span className="delivery">
                      Paid: <b>$500.0</b>
                    </span>
                    <span className="delivery">Delivered</span>
                    <span className="delivery">
                      Delivered On: <b>March 20 2020</b>
                    </span> */}
                  </div>
                </div>
                <div className="order_product">
                  <div className="order_product_image">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVT_egUuUGDHCpGEBlaKIUTmOTO31ywA5dkSvKNqe&s"
                      alt=""
                    />
                  </div>
                  <div className="order_product_info">
                    <h4 className="order_product_title">
                      This is the tile of the product
                    </h4>
                    <span className="order_product_price">$ 999</span>
                    <div className="amount">
                      <span className="delivery">
                        Quantity: <b>1</b>
                      </span>
                      {/* if shipping */}
                      <span className="delivery">
                        Pay: <b>$500</b>
                      </span>
                    </div>
                    <div className="status">
                      <span className="delivery">Shipping</span>
                      <span className="delivery">
                        <b>30 March 2020</b>
                      </span>
                    </div>
                    {/* if shipping */}
                    {/* if Delivered */}
                    {/* <span className="delivery">
                      Paid: <b>$500.0</b>
                    </span>
                    <span className="delivery">Delivered</span>
                    <span className="delivery">
                      Delivered On: <b>March 20 2020</b>
                    </span> */}
                  </div>
                </div>
                <div className="order_product">
                  <div className="order_product_image">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVT_egUuUGDHCpGEBlaKIUTmOTO31ywA5dkSvKNqe&s"
                      alt=""
                    />
                  </div>
                  <div className="order_product_info">
                    <h4 className="order_product_title">
                      This is the tile of the product
                    </h4>
                    <span className="order_product_price">$ 999</span>
                    <div className="amount">
                      <span className="delivery">
                        Quantity: <b>1</b>
                      </span>
                      {/* if shipping */}
                      <span className="delivery">
                        Pay: <b>$500</b>
                      </span>
                    </div>
                    <div className="status">
                      <span className="delivery">Shipping</span>
                      <span className="delivery">
                        <b>30 March 2020</b>
                      </span>
                    </div>
                    {/* if shipping */}
                    {/* if Delivered */}
                    {/* <span className="delivery">
                      Paid: <b>$500.0</b>
                    </span>
                    <span className="delivery">Delivered</span>
                    <span className="delivery">
                      Delivered On: <b>March 20 2020</b>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Order;
