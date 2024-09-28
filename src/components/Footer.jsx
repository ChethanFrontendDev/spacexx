import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-10 bg-black text-white leading-none outline-none">
      <span className="text-xs font-semibold mt-5 lg:-mt-1">SpaceX © 2024</span>
      <div className="mb-5 -mt-6 lg:mt-10 lg:mb-10 flex gap-5 lg:gap-10">
        <Link to={"/footer/privacy-policy"}><span className="text-xs font-semibold hover:text-zinc-500 transition-colors duration-300 ease-in-out hover:font-bold hover:tracking-tight">PRIVACY POLICY</span></Link>
        <Link to={"/footer/supplier"}><span className="text-xs font-semibold hover:text-zinc-500 transition-colors duration-300 ease-in-out hover:font-bold hover:tracking-tight">SUPPLIERS</span></Link>
      </div>
    </div>
  );
}

export default Footer 