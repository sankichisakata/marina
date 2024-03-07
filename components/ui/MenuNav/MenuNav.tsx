"use client";

import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import HomeBtn from "../Btn/HomeBtn";

type Props = {
  afterClass?: any;
  isMenuClose?: React.MouseEventHandler<HTMLAnchorElement>;
};

const MenuNav: React.FC<Props> = (props, afterClass) => {
  const NavClass = [
    {
      title: "セッティング",
      link: "/setting",
    },
    {
      title: "会社案内",
      link: "/company",
    },
    {
      title: "事業案内",
      link: "/service",
    },
    {
      title: "ニュース",
      link: "/news",
    },
    {
      title: "お問い合わせ",
      link: "/contact",
    },
  ];

  return (
    <nav className={`${afterClass} w-full flex justify-center items-center`}>
      <ul
        className="
        w-11/12 
        flex-col justify-around
        divide-y divide-body md:divide-none 
        "
      >
        <HomeBtn />
        {NavClass.map((navClass) => (
          <li key={navClass.title}>
            <Link
              onClick={props.isMenuClose}
              className={`
              group
              w-full
              flex justify-between items-center
              gap-md p-md
              `}
              href={navClass.link}
            >
              <p
                className="
              transition-transform
              duration-300
            
              "
              >
                {navClass.title}
              </p>
              <div
                className="
                md:hidden
                transition-all duration-300 
                flex justify-center items-center
                "
              >
                <div
                  className="
                transition-all duration-100
                relative w-7 h-7
                border-0.5 border-graydark 
                border-dashed
                group-hover:border-dashed
                group-hover:border-secondary
                rounded-full
                "
                ></div>
                <IoArrowForwardOutline
                  className="
                transition duration-500
                absolute 
                text-body
                group-hover:text-secondary
                group-hover:text-lg
                group-hover:translate-x-4
                "
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuNav;
