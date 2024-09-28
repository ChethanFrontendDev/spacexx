import React from "react";

function Card({ name, description, content }) {
  return (
    <div className="bg-transparent text-white absolute bottom-6 left-6 sm:left-12 sm:bottom-28">
      <h4 className="text-lg lg:text-xl uppercase tracking-tight mb-[2px]">
        {name}
      </h4>
      <h1 className="text-3xl lg:text-5xl sm:text-5xl uppercase font-bold leading-none">{description}</h1>
      <button className="relative px-12 py-4 sm:px-16 lg:px-14 lg:py-4 border-[2px] uppercase tracking-tight font-semibold mt-6 lg:mt-11 overflow-hidden group">
        <span className="absolute inset-0 translate-y-full bg-white group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
        <span className="relative z-10 group-hover:text-black font-bold tracking-tight transition-colors duration-500 ease-in-out">{content}</span>
      </button>
    </div>
  );
}

export default Card;
