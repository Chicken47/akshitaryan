"use client";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex justify-center w-full bg-black">
      <div
        style={{
          backgroundImage: "url('/images/blob.gif')",
        }}
        className="flex flex-col justify-between w-full min-h-screen text-white bg-center bg-no-repeat bg-contain max-w-[1366px]"
      >
        <div>
          <div className="flex justify-center w-full text-[10vw] font-extrabold font-raleway uppercase mt-[2vw] mix-blend-difference">
            Akshit Aryan
          </div>
          <div className="flex justify-between w-full px-[5vw] font-poppins text-[4vw] mt-[2vw] text-red-600">
            <span>ui/ux designer</span>
            <span className="-mt-5">web developer</span>
          </div>
        </div>
        <div className="px-[10vw] flex justify-between items-center w-full mb-[6vw]">
          <div className="rounded-lg bg-[#1a04046b] p-8 w-2/5 font-poppins text-[20px]">
            Designer and developer, dedicated to crafting digital experiences
            that blend form and function seamlessly.
          </div>
          <div className="flex flex-col justify-between p-10 space-y-5">
            <div className="px-12 py-4 text-[22px] text-center transition-all duration-300 bg-red-700 border border-red-500 rounded-full cursor-pointer font-poppins hover:bg-black">
              Contact Me
            </div>
            <div className="flex w-full space-x-5 justify-evenly">
              <span className="px-3 py-3 transition-all duration-300 border border-white rounded-full cursor-pointer hover:bg-red-700">
                <Email />
              </span>
              <span className="px-3 py-3 transition-all duration-300 border border-white rounded-full cursor-pointer hover:bg-red-700">
                <LinkedIn />
              </span>
              <span className="px-3 py-3 transition-all duration-300 border border-white rounded-full cursor-pointer hover:bg-red-700">
                <GitHub />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
