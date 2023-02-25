// import "./home.css";

import Banner from "../../components/banner/Banner";
import CategoryComp from "../../components/categoryCamp/CategoryComp";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HomeCat from "../../components/homeCat/HomeCat";
import ProductGrid from "../../components/productGrid/ProductGrid";
import ProductMinimal from "../../components/productMinimal/ProductMinimal";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [newProducts, setNewProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("/products");
    setNewProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="home">
      <Header />
      <main>
        <Banner />
        <div className="product-container">
          <div className="container">
            <Sidebar />
            <div className="product-box  ">
              <HomeCat />
              {/* <ProductMinimal /> */}
              <div className="product-main">
                <h2 className="title">New Products</h2>
                <ProductGrid products={newProducts.slice(0, 20)} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
