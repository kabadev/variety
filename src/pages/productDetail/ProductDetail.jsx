import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductGrid from "../../components/productGrid/ProductGrid";
import Sidebar from "../../components/sidebar/Sidebar";
import Product from "./Product";

function ProductDetail() {
  const navigate = useNavigate();
  const product_slug = useParams().p_slug;
  const [product, setProduct] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState(null);
  const [productCatId, setProductCatId] = useState(null);
  const fetchProducts = async () => {
    const res = await axios.get("/products/byslug/" + product_slug);
    if (res.status === 200) {
      setProduct(res.data);
      setProductCatId(res.data.cat._id);
    } else {
      navigate("/not-found");
    }
  };
  const fetchRelatedProducts = async () => {
    const res = await axios.get("/products/relatedByCat/" + productCatId);
    setRelatedProduct(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, [product_slug]);
  useEffect(() => {
    fetchRelatedProducts();
  }, [productCatId]);

  return (
    <div className="home">
      <Header />
      <main>
        <div className="product-container">
          <div className="container">
            <Sidebar />
            <div className="product-box  ">
              <Product product={product} />
              <div className="product-main">
                <h2 className="title">Related Products</h2>
                {relatedProduct && (
                  <ProductGrid
                    products={relatedProduct
                      ?.slice(0, 6)
                      .filter((item) => item._id !== product._id)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductDetail;
