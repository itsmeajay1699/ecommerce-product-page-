import React from "react";
import cart from "../images/icon-cart.svg";
import logo from "../images/logo.svg";
import { items } from "../utils/data";
import personImage from "../images/image-avatar.png";
import { useGlobalContext } from "./context";
import Cart from "./Cart";
const Navbar = () => {
  const {
    isSidebarOpen,
    closeSidebar,
    openSidebar,
    cartQuantity,
    showCart,
    openCart,
    totalPrice,
    cartItem,
  } = useGlobalContext();
  return (
    console.log(showCart),
    (
      <header className="container">
        <nav className="navbar-container d-flex">
          <div className="d-flex">
            <img
              onClick={openSidebar}
              className="cart-image"
              src={cart}
              alt="toggle"
            />
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="navbar-item">
            {items.map((item, id) => {
              return (
                <ul key={id} className="navbar-list">
                  <li>
                    <a className="navbar-links" href="">
                      {item}
                    </a>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="social">
            <img
              className="social-img p-relative"
              src={cart}
              alt=""
              onClick={openCart}
            />
            <span className="cart-quantity">{cartQuantity}</span>
            <img className="social-img" src={personImage} alt="" />
          </div>
          {showCart && (
            <div className="big">
              {items.map((item, id) => {
                return <Cart key={id} item={item} />;
              })}
              <div className="cart-price">
                <h2 className="total-price">
                  ${totalPrice === 0 ? "0.00" : totalPrice}
                </h2>
                <button className="btn">Checkout</button>
              </div>
            </div>
          )}
        </nav>
      </header>
    )
  );
};

export default Navbar;
