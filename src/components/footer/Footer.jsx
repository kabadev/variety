import React, { useEffect, useState } from "react";
import axios from "axios";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const res = await axios.get("/categories/category/subcat");
    setCategories(res.data);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <footer>
      <div className="footer-category">
        <div className="container">
          <h2 className="footer-category-title">Categories directory</h2>

          {categories?.map((category, i) => (
            <div className="footer-category-box">
              <h3 className="category-box-title">{category?.title} :</h3>

              {category?.subcat.map((subcat, i) => (
                <Link
                  to={`/subcategory/${subcat.slug}`}
                  className="footer-category-link"
                >
                  {subcat.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-nav">
        <div className="container">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Popular Categories</h2>
            </li>

            {categories?.map((category, i) => (
              <li className="footer-nav-item" key={i}>
                <Link
                  to={`/category/${category.slug}`}
                  className="footer-nav-link"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Products</h2>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Prices drop
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                New products
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Best sales
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Contact us
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Sitemap
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Our Company</h2>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Delivery
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Legal Notice
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Terms and conditions
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                About us
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Secure payment
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Services</h2>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Prices drop
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                New products
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Best sales
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Contact us
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Sitemap
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Contact</h2>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <address className="content">Kaporo, USA</address>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="call-outline"></ion-icon>
              </div>

              <a
                href="tel:+607936-8058"
                target="_blank"
                className="footer-nav-link"
              >
                +1 629 02 13 88
              </a>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <a
                href="mailto:Mabalkainvestment@gmail.com"
                className="footer-nav-link"
              >
                afic@gmail.com
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Follow Us</h2>
            </li>

            <li>
              <ul className="social-link">
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <img
            src="./assets/images/payment.png"
            alt="payment method"
            className="payment-img"
          />

          <p className="copyright">
            Copyright &copy; <a href="#">Mabalka</a> all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
