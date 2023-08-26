"use client";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="relative flex justify-center w-full bg-black">
      {/* <div className="absolute flex flex-col items-center justify-center w-screen h-screen bg-black">
        <span className="text-[3vw] w-3/5 text-center">
          Your time is limited, so don't waste it living someone else's life.
          Don't be trapped by `dogma`, which is living with the results of other
          people's thinking. - Steve Jobs
        </span>
      </div> */}
      <div
        style={{
          backgroundImage: "url('/images/blob.gif')",
        }}
        className="flex flex-col justify-between w-full min-h-screen text-white bg-center bg-no-repeat bg-contain max-w-[1366px]"
      >
        <div className="w-full flex text-white justify-between px-10 py-3 bg-gradient-to-b from-[#75000067] to-[#000000]">
          <span className="text-[1.7vw] font-extrabold font-poppins group cursor-pointer">
            <span className="transition-all group-hover:text-red-700">
              akshit
            </span>
            <span className="ml-1 text-red-700 transition-all group-hover:text-white">
              aryan
            </span>
          </span>
          <span className="text-[1.5vw]">about, services, contact</span>
        </div>
        <div>
          <div className="flex justify-center w-full text-[10vw] font-extrabold font-poppins uppercase mt-[2vw] mix-blend-difference">
            Akshit Aryan
          </div>
          <div className="flex justify-between w-full px-[5vw] font-abril text-[4vw] mt-[2vw] text-red-600">
            <span>ui/ux designer</span>
            <span className="-mt-5">web developer</span>
          </div>
        </div>
        <div className="px-[10vw] flex justify-between items-center w-full mb-[6vw]">
          <div className="rounded-lg bg-[#1a04046b] p-8 w-2/5 font-alegreya text-[1.7vw]">
            Designer and developer, dedicated to crafting digital experiences
            that blend form and function seamlessly.
          </div>
          <div className="flex flex-col justify-between p-10 space-y-5">
            <div
              onClick={() => window.scrollTo(0, document.body.scrollHeight)}
              className="px-12 py-4 text-[22px] text-center transition-all duration-300 bg-red-700 border border-red-500 rounded-full cursor-pointer font-poppins hover:bg-black"
            >
              Contact Me
            </div>
            <div className="flex w-full space-x-5 justify-evenly">
              <span className="px-3 py-3 transition-all duration-300 border border-white rounded-full cursor-pointer hover:bg-red-700">
                <Link target="_blank" href="mailto:akshit.aryan1999@gmail.com">
                  <Email />
                </Link>
              </span>
              <span className="px-3 py-3 transition-all duration-300 border border-white rounded-full cursor-pointer hover:bg-red-700">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/akshitaryan"
                >
                  <LinkedIn />
                </Link>
              </span>
              <span className="px-3 py-3 transition-all duration-300 border border-white rounded-full cursor-pointer hover:bg-red-700">
                <Link target="_blank" href="https://github.com/Chicken47">
                  <GitHub />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
