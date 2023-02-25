import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { IoRemoveOutline, IoAddOutline, IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const res = await axios.get("/categories/category/subcat");
    setCategories(res.data);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const [toggledItems, setToggledItems] = useState([]);

  function handleClick(item) {
    if (toggledItems.includes(item)) {
      setToggledItems(toggledItems.filter((i) => i !== item));
    } else {
      setToggledItems([...toggledItems, item]);
    }
  }

  return (
    <div className="sidebar has-scrollbar ">
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>

          <button className="sidebar-close-btn">
            <IoCloseOutline />
          </button>
        </div>

        <ul className="sidebar-menu-category-list">
          {categories.map((category, i) => (
            <li className="sidebar-menu-category " key={i}>
              <button
                className="sidebar-accordion-menu"
                onClick={() => handleClick(category)}
              >
                <div className="menu-title-flex">
                  <img
                    src={category.img}
                    alt="clothes"
                    width="20"
                    height="20"
                    className="menu-title-img"
                  />

                  <p className="menu-title">{category.title}</p>
                </div>

                <div>
                  {toggledItems.includes(category) ? (
                    <IoRemoveOutline className="add-icon" />
                  ) : (
                    <IoAddOutline className="add-icon" />
                  )}
                </div>
              </button>

              <ul
                className={`sidebar-submenu-category-list openAccord ${
                  toggledItems.includes(category) ? "active" : ""
                }`}
              >
                {category.subcat.map((subcategory, i) => (
                  <li className="sidebar-submenu-category" key={i}>
                    <Link
                      to={`/subcategory/${subcategory.slug}`}
                      className="sidebar-submenu-title"
                    >
                      <p className="product-name">{subcategory.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="product-showcase">
        <h3 className="showcase-heading">best sellers</h3>

        <div className="showcase-wrapper">
          <div className="showcase-container">
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="./assets/images/products/1.jpg"
                  alt="baby fabric shoes"
                  width="75"
                  height="75"
                  className="showcase-img"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">baby fabric shoes</h4>
                </a>

                <div className="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

                <div className="price-box">
                  <del>$5.00</del>
                  <p className="price">$4.00</p>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="./assets/images/products/2.jpg"
                  alt="men's hoodies t-shirt"
                  className="showcase-img"
                  width="75"
                  height="75"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">men's hoodies t-shirt</h4>
                </a>
                <div className="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-half-outline"></ion-icon>
                </div>

                <div className="price-box">
                  <del>$17.00</del>
                  <p className="price">$7.00</p>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="./assets/images/products/3.jpg"
                  alt="girls t-shirt"
                  className="showcase-img"
                  width="75"
                  height="75"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">girls t-shirt</h4>
                </a>
                <div className="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-half-outline"></ion-icon>
                </div>

                <div className="price-box">
                  <del>$5.00</del>
                  <p className="price">$3.00</p>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="./assets/images/products/4.jpg"
                  alt="woolen hat for men"
                  className="showcase-img"
                  width="75"
                  height="75"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">woolen hat for men</h4>
                </a>
                <div className="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

                <div className="price-box">
                  <del>$15.00</del>
                  <p className="price">$12.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
