import React, { useContext, useEffect, useState } from "react";
import "./product.css";
import parse from "html-react-parser";
import { Select } from "@mantine/core";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
const Product = ({ product }) => {
  const { loggedUser, config } = useContext(AuthContext);
  const { cart, setCart, fetchCart } = useContext(AppContext);
  const [quatity, setQuatity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const addToCartFUnction = async (e) => {
    e.preventDefault();
    if (loggedUser) {
      const data = {
        product: product._id,
        user: loggedUser._id,
        quatity: quatity,
      };
      setIsLoading(true);
      const res = await axios.post("/carts", data, config);
      setIsLoading(false);
      fetchCart();
      if (res.status === 200) {
        setErrorMsg("Product has successfully Added to your Cart");
      } else if (res.status === 400) {
        setErrorMsg(res.response.data);
      } else {
        setErrorMsg("Login Faild! Please try again later!");
      }
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setErrorMsg(null);
    }, 3000);
  }, [errorMsg]);

  // chech if product already in cart
  const productExists = (id) => {
    return cart.some((ct) => ct.product._id === id);
  };
  useEffect(() => {
    productExists();
  }, []);

  return (
    <div className="product">
      <div className="showcase-wrapper">
        <div className="showcase-container">
          <div className="showcase product_d">
            <div className="showcase-banner">
              <img
                src={product?.img}
                alt={product?.title}
                className="showcase-img img_main"
              />
            </div>

            <div className="showcase-content">
              <h3 className="showcase-title">{product?.title}</h3>
              <p className="showcase-desc">
                {product?.desc && parse(product?.desc)}
              </p>

              <div className="price-box">
                <p className="price">${product?.price}</p>
              </div>

              <div className="quatity">
                <Select
                  placeholder="Quantity"
                  searchable
                  nothingFound="No options"
                  data={["1", "2", "3", "4", "5"]}
                  value={quatity}
                  onChange={setQuatity}
                />
              </div>

              {productExists(product?._id) ? (
                <Link to="/cart" className="add-cart-btn">
                  Go to cart
                </Link>
              ) : (
                <button className="add-cart-btn" onClick={addToCartFUnction}>
                  Add to cart
                </button>
              )}
              <span className="message">{errorMsg}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
