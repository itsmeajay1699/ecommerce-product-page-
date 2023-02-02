import React from "react";
import { thumbnailImage } from "../utils/data";
import productImg from "../images/image-product-1.jpg";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import { useGlobalContext } from "./context";
import { data } from "../utils/data";
const HomePage = () => {
  const {
    mouseHoverIndex,
    setMouseHoverIndex,
    quantity,
    increaseQuantity,
    decreaseQuantity,
  } = useGlobalContext();
  return (
    <main>
      <section className="product-cont">
        <picture className="main-img">
          <source
            media="(min-width: 768px)"
            srcSet={thumbnailImage[mouseHoverIndex]}
          />
          <img src={data[0].image[mouseHoverIndex]} alt="" />
        </picture>
        <div className="product-img">
          {data[0].image.map((item, index) => {
            return (
              <div
                key={index}
                className="product-photo"
                onMouseEnter={() => setMouseHoverIndex(index)}
              >
                <img src={item} alt="" />
              </div>
            );
          })}
        </div>
      </section>
      <section className="product-content">
        <h4>Sneaker company</h4>
        <h1>fall limited edition sneaker</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
          tempore voluptas nulla dolorem tempora harum, odit aliquam porro
          adipisci commodi ut labore, illum optio soluta!
        </p>

        <div className="dis">
          <h2>$125.00</h2>
          <span className="off-price">50%</span>
        </div>
        <div
          style={{ display: "flex", marginTop: "1em", alignItems: "baseline" }}
        >
          <div className="flex">
            <div className="inc">
              <img onClick={decreaseQuantity} src={minus} alt="" />
              <span>{quantity}</span>
              <img onClick={increaseQuantity} src={plus} alt="" />
            </div>
            <button className="add-to-cart-btn">Add to cart</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
