import React, { useEffect, useState } from "react";
import axios from "axios";
import "./homeCat.css";
import { Link } from "react-router-dom";
const HomeCat = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const res = await axios.get("/categories/category/subcat");
    setCategories(res.data);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="category-item-container home_cat">
      {categories?.map((category, i) => (
        <Link
          to={`/category/${category.slug}`}
          className="category-item"
          key={i}
        >
          <div className="category-img-box">
            <img src={category.img} alt={category.title} width="30" />
          </div>

          <div className="category-content-box">
            <div className="category-content-flex">
              <h3 className="category-item-title">{category.title} </h3>
            </div>
            <div className="category-btn">Show all</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeCat;
