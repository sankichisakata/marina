"use client";

import { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import DrawerNav from "../DrawerNav/DrawerNav";

const DrawerBtn = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  // menuボタンの開閉動き
  const isMenuTgl = () => {
    setOpenMenu(!openMenu);
  };

  // menuでボタンクリック後にmenu閉じる：子コンポーネント(MenuNav.tsx)での関数
  const isMenuClose = () => {
    const value = false;
    setOpenMenu(value);
  };

  const menuClass = openMenu
    ? "visible animate-slide-in-bck-top"
    : "invisible animate-slide-out-bck-top";

  const shadowClass = openMenu
    ? "visible animate-first-shadow"
    : "invisible animate-end-shadow";

  return (
    <>
      <button onClick={isMenuTgl}>
        {openMenu ? (
          <IoIosClose className="mx-auto text-sub-color text-xxxl" />
        ) : (
          <IoIosMenu className="mx-auto text-sub-color text-xxxl" />
        )}
      </button>

      <div
        className={`
        z-[-10]
        fixed 
        top-0 left-0 pt-xxl
        ${menuClass}
        w-full h-safari-screen
        flex flex-col items-center
        bg-defwhite
        transition-all duration-1000
      `}
      >
        <DrawerNav
          isMenuClose={isMenuClose}
          afterClass={"transition duration-1000 delay-1000"}
        />
      </div>

      {/* シャドウドロワー */}
      <div
        className={`
        z-[-20]
        fixed 
        top-0 left-0
        ${shadowClass}
        w-full h-safari-screen
        bg-primary
        transition-all duration-1000
      `}
      ></div>
    </>
  );
};

export default DrawerBtn;
