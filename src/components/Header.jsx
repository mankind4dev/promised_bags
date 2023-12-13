import React, { useState } from "react";
import { Nav, NavMobile } from "./index";
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

export default function Header() {

  const [navMobile, setNavMobile] = useState()


  return (
    <header 
      className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0"
      data-aos='fade-down' data-aos-delay='1200' data-aos-duration='1000'
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            <a href="#">
              <p className="text-purple-400 text-[35px]">Promised<span className="text-blue-500">Bags</span></p>
            </a>

            <div className="hidden lg:flex">
              <Nav />
            </div>
          </div>

          <div className={`${navMobile ? "max-h-52" : "max-h-0"} lg:hidden absolute top-24 bg-slate-600 w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}>
            <NavMobile />
          </div>
          <button className="btn2 btn-quaternary flex items-center gap-x-[10px] group">
            <p>Request Demo</p>
            <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white transition" />
          </button>
          <div 
            onClick={() => setNavMobile(!navMobile)} 
            className="lg:hidden text-2xl text-primary cursor-pointer"
          >
            {navMobile ? <FaTimes /> : <IoMdMenu/>}
          </div>
        </div>
      </div>
    </header>
  );
}
