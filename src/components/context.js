import React, { useState, useContext } from "react";
import { data } from "../utils/data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mouseHoverIndex, setMouseHoverIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const[totalPrice, setTotalPrice] = useState(750);
  const [cartItem, setCartItem] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(6);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
   const openCart = () => {
    setShowCart(!showCart);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
        mouseHoverIndex,
        quantity,
        increaseQuantity,
        decreaseQuantity,
        setMouseHoverIndex,
        cartQuantity,
        setCartQuantity,
        cartItem,
        showCart,
        totalPrice,
        openCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
