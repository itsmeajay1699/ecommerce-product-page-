import React from "react";
import HomePage from "./components/HomePage";
import ItemOverLay from "./components/ItemOverLay";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
const App = () => {
  return (
    <>
      <Navbar/>
      <HomePage />
      <SideBar />
    </>
  );
};

export default App;
