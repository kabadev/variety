import React from "react";

const ShowCase = ({ products, cardTitle }) => {
  return (
    <div className="product-showcase">
      <h2 className="title">{cardTitle}</h2>

      <div className="showcase-wrapper has-scrollbar">
        <div className="showcase-container">
          {products.slice(3, 7).map((product, i) => (
            <div className="showcase" key={i}>
              <a href="#" className="showcase-img-box">
                <img
                  src={product?.img}
                  alt="men yarn fleece full-zip jacket"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">{product.title}</h4>
                </a>

                <a href="#" className="showcase-category">
                  {product.subcat.title}
                </a>

                <div className="price-box">
                  <p className="price">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
