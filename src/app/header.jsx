import React from "react";

const Header = () => {
  return (
    <div className="w-full flex text-white justify-between px-10 py-3 bg-gradient-to-b from-[#75000067] to-[#000000]">
      <span className="text-[1.7vw] font-extrabold font-poppins group cursor-pointer">
        <span className="transition-all group-hover:text-red-700">akshit</span>
        <span className="ml-1 text-red-700 transition-all group-hover:text-white">
          aryan
        </span>
      </span>
      <span className="text-[1.5vw]">about, services, contact</span>
    </div>
  );
};

export default Header;
