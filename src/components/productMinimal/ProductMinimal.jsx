import React, { useEffect, useState } from "react";
import axios from "axios";
import "./productMinimal.css";
import ShowCase from "./ShowCase";
const ProductMinimal = () => {
  const [newProducts, setNewProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("/products");
    setNewProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="product-minimal">
      <ShowCase products={newProducts} cardTitle="New Arrivals" />
      <ShowCase products={newProducts} cardTitle="New Arrivals" />
      <ShowCase products={newProducts} cardTitle="New Arrivals" />
      {/* <ShowCase /> */}
      {/* <ShowCase /> */}
    </div>
  );
};

export default ProductMinimal;
