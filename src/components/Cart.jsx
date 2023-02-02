import React from "react";
import trash from "../images/icon-delete.svg";
import { thumbnailImage } from "../utils/data";
const Cart = ({ item }) => {
  console.log(item);
  return (
    <div className="cart-container">
      <div className="cart-item">
        <div className="cart-img">
          <img src={thumbnailImage[0].img} alt="" />
        </div>
        <div className="item-info">
          <h3>{thumbnailImage[0].name}</h3>
          <p>${thumbnailImage[0].price}</p>
        </div>
        <div className="trash-container">
          <img src={trash} alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Cart;
