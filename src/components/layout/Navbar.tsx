"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Handbag from "../../../public/Icons/Handbag.png";
import { usePathname } from "next/navigation";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="bg-[#0D0D0D]">
        <div className="max-w-[1320px] mx-auto flex-col md:justify-center justify-between lg:pt-[45px] pt-5 bg-[#0D0D0D]">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary font-helvetica">
              Food<span className="text-white">tuck</span>
            </p>
          </div>

          <div className="links-input flex items-center justify-between px-4 xl:px-0 sm:flex-row flex-col gap-4 sm:gap-0">
            <div className="links flex gap-4 lg:gap-8 font-inter font-normal sm:text-base text-[12px] text-background">
              <Link href={"/"} className="hover:text-primary">Home</Link>
              <Link href={"/Menu"} className="hover:text-primary">Menu</Link>
              <Link href={"/BlogList"} className="hover:text-primary">Blog</Link>
              <Link href={"/OurChef"} className="hover:text-primary">Chefs</Link>
              <Link href={"/About"} className="hover:text-primary">About</Link>
              <Link href={"/OurShop"} className="hover:text-primary">Shop</Link>
              <Link href={"/"} className="hover:text-primary">Contact</Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="input relative hidden md:flex">
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-[27px] bg-transparent border border-primary px-5 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <CiSearch className="absolute w-5 h-5 text-background top-1/2 right-4 transform -translate-y-1/2" />
              </div>
              <CiSearch className="w-6 h-6 text-background md:hidden" />
              <Link href={"/SignUp"}>
                <AiOutlineUser className="w-6 h-6 text-background" />
              </Link>
              <Image
                src={Handbag}
                alt="HandBag Icon"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0D0D0D]">
      <div className="max-w-[1320px] mx-auto flex justify-between lg:pt-[45px] px-4 pt-5 bg-[#0D0D0D]">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary font-helvetica">
            Food<span className="text-white">tuck</span>
          </p>
        </div>

        <div className="links-input hidden sm:flex items-center justify-between">
          <div className="links flex gap-4 lg:gap-8 font-inter font-normal sm:text-base text-[12px] text-background">
            <Link href={"/"} className="hover:text-primary">Home</Link>
            <Link href={"/Menu"} className="hover:text-primary">Menu</Link>
            <Link href={"/BlogList"} className="hover:text-primary">Blog</Link>
            <Link href={"/OurChef"} className="hover:text-primary">Chefs</Link>
            <Link href={"/About"} className="hover:text-primary">About</Link>
            <Link href={"/OurShop"} className="hover:text-primary">Shop</Link>
            <Link href={"/"} className="hover:text-primary">Contact</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="input relative hidden md:flex">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-[27px] bg-transparent border border-primary px-5 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <CiSearch className="absolute w-5 h-5 text-background top-1/2 right-4 transform -translate-y-1/2" />
          </div>
          <CiSearch className="w-6 h-6 text-background md:hidden" />
          <Link href={"/SignUp"}>
            <AiOutlineUser className="w-6 h-6 text-background" />
          </Link>
          <Image src={Handbag} alt="HandBag Icon" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
