"use client";

import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import HomeBtn from "../Btn/HomeBtn";
import FadeInBack1 from "../Observer/FadeInBack/FadeInBack1";
import FadeInBack2 from "../Observer/FadeInBack/FadeInBack2";
import FadeInBack3 from "../Observer/FadeInBack/FadeInBack3";
import FadeInBack4 from "../Observer/FadeInBack/FadeInBack4";
import FadeInBack5 from "../Observer/FadeInBack/FadeInBack5";

type Props = {
  afterClass?: any;
  isMenuClose?: React.MouseEventHandler<HTMLAnchorElement>;
};

const DrawerNav: React.FC<Props> = (props, afterClass) => {
  const NavClass = {
    setting: { title: "セッティング", link: "/setting" },
    company: { title: "会社案内", link: "/company" },
    service: { title: "事業案内", link: "/service" },
    news: { title: "ニュース", link: "/news" },
    contact: { title: "お問い合わせ", link: "/contact" },
  };

  return (
    <nav
      className={`${afterClass} w-full flex flex-col justify-center items-center`}
    >
      <HomeBtn />
      <ul
        className="
        w-11/12 mx-auto
        flex flex-col 
        divide-y divide-body md:divide-none
        "
      >
        <FadeInBack1>
          <li>
            <Link
              onClick={props.isMenuClose}
              className={`
              group
              w-full
              flex justify-between md:justify-start items-center
              gap-md p-md
              `}
              href={NavClass.setting.link}
            >
              <p
                className="
              transition-transform
              duration-300
              font-bold
              "
              >
                {NavClass.setting.title}
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
        </FadeInBack1>

        <FadeInBack2>
          <li>
            <Link
              onClick={props.isMenuClose}
              className={`
              group
              w-full
              flex justify-between items-center
              gap-md p-md
              `}
              href={NavClass.company.link}
            >
              <p
                className="
              transition-transform
              duration-300
            
              "
              >
                {NavClass.company.title}
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
        </FadeInBack2>

        <FadeInBack3>
          <li>
            <Link
              onClick={props.isMenuClose}
              className={`
              group
              w-full
              flex justify-between items-center
              gap-md p-md
              `}
              href={NavClass.service.link}
            >
              <p
                className="
              transition-transform
              duration-300
            
              "
              >
                {NavClass.service.title}
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
        </FadeInBack3>

        <FadeInBack4>
          <li>
            <Link
              onClick={props.isMenuClose}
              className={`
              group
              w-full
              flex justify-between items-center
              gap-md p-md
              `}
              href={NavClass.news.link}
            >
              <p
                className="
              transition-transform
              duration-300
            
              "
              >
                {NavClass.news.title}
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
        </FadeInBack4>

        <FadeInBack5>
          <li>
            <Link
              onClick={props.isMenuClose}
              className={`
              group
              w-full
              flex justify-between items-center
              gap-md p-md
              `}
              href={NavClass.contact.link}
            >
              <p
                className="
              transition-transform
              duration-300
            
              "
              >
                {NavClass.contact.title}
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
        </FadeInBack5>
      </ul>
    </nav>
  );
};

export default DrawerNav;
