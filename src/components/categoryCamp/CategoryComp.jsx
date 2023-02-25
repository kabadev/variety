import React, { useEffect, useState } from "react";
import axios from "axios";
import "./categoryComp.css";
const CategoryComp = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const res = await axios.get("/categories/category/subcat");
    setCategories(res.data);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          {categories?.map((category, i) => (
            <div className="category-item">
              <div className="category-img-box">
                <img src={category.img} alt={category.title} width="30" />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">{category.title} </h3>
                </div>
                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryComp;
