// import "./home.css";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductGrid from "../../components/productGrid/ProductGrid";
import Sidebar from "../../components/sidebar/Sidebar";

function Category() {
  const navigate = useNavigate();
  const cat_slug = useParams().catSlug || null;
  const subcat_slug = useParams().subCatSlug || null;
  const [products, setProducts] = useState(null);
  const [catTitle, setCatTitle] = useState(null);
  const fetchProducts = async () => {
    const res = cat_slug
      ? await axios.get("/products/byCatslug/" + cat_slug)
      : await axios.get("/products/bySubCatslug/" + subcat_slug);
    if (res.status === 200) {
      setProducts(res.data.products);
      setCatTitle(res.data.catTitle);
    } else {
      navigate("/not-found");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [subcat_slug, cat_slug]);

  return (
    <div className="home">
      <Header />
      <main>
        <div className="product-container">
          <div className="container">
            <Sidebar />
            <div className="product-box  ">
              <div className="product-main">
                <h2 className="title " style={{ textAlign: "center" }}>
                  {catTitle}
                </h2>
                {products && <ProductGrid products={products?.slice(0, 20)} />}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Category;
