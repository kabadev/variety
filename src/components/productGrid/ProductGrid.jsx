import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./productGrid.css";
const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div className="showcase">
          <Link to={`/product/${product?.slug}`} className="showcase-banner">
            <img
              src={product.img}
              alt={product?.subcat.title}
              width="300"
              className="product-img default"
            />
          </Link>

          <div className="showcase-content">
            <Link
              to={`/subcategory/${product?.subcat?.slug}`}
              className="showcase-category"
            >
              {product?.subcat.title}
            </Link>
            <h3>
              <Link to={`/product/${product?.slug}`} className="showcase-title">
                {product?.title.slice(0, 50)}...
              </Link>
            </h3>

            <div className="price-box">
              <p className="price">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
