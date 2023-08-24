import Link from "next/link";
import React from "react";

const HomeProjects = () => {
  return (
    <div className="flex justify-center w-full bg-black">
      <div
        style={{
          backgroundImage: "url('/images/project-gif.gif')",
          //   backgroundImage: "url('https://i.gifer.com/BHFO.gif')",
        }}
        className="flex flex-col w-full min-h-screen text-white max-w-[1366px] py-10 bg-center bg-no-repeat bg-cover"
      >
        <span className="w-full text-center font-bold text-red-600 mt-10 font-poppins text-[5vw]">
          Accomplished Projects
        </span>
        <div className="flex items-center justify-center w-full mt-16 space-x-5">
          <div
            id="project-desc"
            className="flex flex-col justify-center w-4/12 h-full p-5 bg-[#39393954] rounded-2xl"
          >
            <span className="font-poppins text-[2vw] text-red-500 font-bold">
              Portfolio Website
            </span>
            <span className="py-2 font-extrabold text-gray-400">
              July 2023 - August 2023
            </span>
            <span>
              I built a custom portfolio website that showcases my work and
              experience in web design and development. The website is easy to
              navigate and includes a contact form so that potential clients can
              reach me easily.
            </span>
            <span className="font-poppins text-[2vw] text-red-500 mt-5">
              Tech Stack Used
            </span>
            <div className="flex flex-wrap items-center w-full mt-2 justify-evenly">
              <img
                src="/images/html.png"
                alt="html"
                className="w-[10%] hover:scale-150 cursor-pointer transition-all duration-300"
              />
              <img
                src="/images/css.png"
                alt="html"
                className="w-[10%] hover:scale-150 cursor-pointer transition-all duration-300"
              />
              <img
                src="/images/javascript.png"
                alt="html"
                className="w-[10%] hover:scale-150 cursor-pointer transition-all duration-300"
              />
              <img
                src="/images/reactjs.png"
                alt="html"
                className="w-[10%] hover:scale-150 cursor-pointer transition-all duration-300"
              />
              <img
                src="/images/nextjs.png"
                alt="html"
                className="w-[10%] hover:scale-150 cursor-pointer transition-all duration-300"
              />
              <img
                src="/images/gsap.png"
                alt="html"
                className="w-[10%] hover:scale-150 cursor-pointer transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-start w-full mt-6 space-x-4">
              <Link
                target="_blank"
                href={"https://github.com/Chicken47/akshitaryan"}
                className="px-5 py-2 transition-all duration-300 bg-red-600 rounded-full cursor-pointer hover:bg-black"
              >
                Source Code
              </Link>
              <Link
                target="_blank"
                href={"https://akshitaryan.vercel.app"}
                className="px-5 py-2 transition-all duration-300 bg-red-600 rounded-full cursor-pointer hover:bg-black"
              >
                Live Site
              </Link>
            </div>
          </div>
          <div
            id="project-img"
            className="flex flex-col justify-center w-6/12 h-full p-5 bg-[#ff191940] rounded-2xl"
          >
            <img
              src="/images/portfolio-screenshot.png"
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center justify-center w-full mt-8">
          <div
            id="project-desc"
            className="flex flex-col justify-center w-4/12 h-full p-5 ml-5 bg-[#39393954] rounded-2xl"
          >
            <span className="font-poppins text-[2vw] text-red-500 font-bold">
              Open for Policy & Impact
            </span>
            <span className="py-2 font-extrabold text-gray-400">
              May 2023 - June 2023
            </span>
            <span>
              Website for a new consulting firm. Conceptualized UI/UX and
              developed it. Fully responsive for all screens. Added animations
              for better user experience and retention. Employed external CMS
              for content.
            </span>
            <span className="font-poppins text-[2vw] text-red-500 mt-5">
              Tech Stack Used
            </span>
            <div className="flex flex-wrap items-center w-full mt-2 justify-evenly">
              <img
                src="/images/html.png"
                alt="html"
                className="w-[10%] hover:scale-150 cursor-pointer transition-all duration-300"
              />
              <img
                src="/images/css.png"
                alt="html"
                className="w-[10%] hover:scale-150 cursor-pointer transition-all duration-300"
              />
              <img
                src="/images/javascript.png"
                alt="html"
                className="w-[10%] hover:scale-150 cursor-pointer transition-all duration-300"
              />
              <img
                src="/images/reactjs.png"
                alt="html"
                className="w-[10%] hover:scale-150 cursor-pointer transition-all duration-300"
              />
              <img
                src="/images/gsap.png"
                alt="html"
                className="w-[10%] hover:scale-150 cursor-pointer transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-start w-full mt-6 space-x-4">
              <Link
                target="_blank"
                href={"https://github.com/Chicken47/opi-new-dev"}
                className="px-5 py-2 transition-all duration-300 bg-red-600 rounded-full cursor-pointer hover:bg-black"
              >
                Source Code
              </Link>
              <Link
                target="_blank"
                href={"https://opi-new-dev.vercel.app"}
                className="px-5 py-2 transition-all duration-300 bg-red-600 rounded-full cursor-pointer hover:bg-black"
              >
                Live Site
              </Link>
            </div>
          </div>
          <div
            id="project-img"
            className="flex flex-col justify-center w-6/12 h-full p-5 bg-[#ff191940] rounded-2xl"
          >
            <img src="/images/opi-screenshot.png" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
