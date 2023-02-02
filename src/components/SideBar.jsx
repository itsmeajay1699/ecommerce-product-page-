import React from "react";
import close from "../images/icon-close.svg";
import { items } from "../utils/data";
import { useGlobalContext } from "./context";

const SideBar = () => {
  const {
    isSidebarOpen,
    closeSidebar,
    openSidebar,
    setIsSidebarOpen,
  } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img onClick={closeSidebar} src={close} alt="" />
      </div>
      <ul className="navlinks">
        {items.map((item, id) => {
          return (
            <li key={id}>
              <a onClick={closeSidebar} href="#">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
