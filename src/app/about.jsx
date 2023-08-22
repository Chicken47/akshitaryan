import React from "react";

const AboutMe = () => {
  return (
    <div className="flex justify-center w-full h-screen">
      <div className="max-w-[1366px] flex px-[5vw] h-full">
        <div
          id="left-about"
          className="flex flex-col justify-center w-1/2 h-full pl-[10vw] space-y-10"
        >
          <span className="font-poppins text-[5vw] font-bold text-red-600">
            About Me
          </span>
          <span className="font-raleway text-[1.2vw]">
            {`I'm Akshit, from Mumbai, IN. I have about 3 years of experience in
            web development, during which I've been committed to crafting
            functional and visually appealing websites.`}
            <br />
            <br />
            {`Beyond development, I've immersed myself in the art of design, with
            a focus on web design, logo creation and brand identity development.`}
            <br />
            <br />
            {`If you're in search of a website to elevate your personal brand or
            serve any other purpose, I'm here to assist you. Let's collaborate
            to turn concepts into impactful digital experiences.`}
          </span>
          <div className="w-1/3 py-1 text-center transition-all duration-300 bg-red-600 border border-red-500 rounded-full cursor-pointer font-poppins hover:bg-black">
            More About Me
          </div>
          <div className="flex flex-col justify-center">
            <span className="w-full font-extrabold text-center underline flex justify-center font-raleway text-[1.5vw]">
              Technology Stack I Employ and Augment
            </span>
            <div className="flex flex-wrap items-center justify-center mt-10 space-x-5">
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
                src="/images/tailwind.png"
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
                src="/images/nodejs.png"
                alt="html"
                className="w-[10%] hover:scale-150 cursor-pointer transition-all duration-300"
              />
            </div>
          </div>
        </div>
        <div
          id="right-about"
          className="flex justify-center w-1/2 h-full bg-center bg-no-repeat bg-contain"
          style={{
            // backgroundImage: "url('https://i.gifer.com/7gRx.gif')",
            // backgroundImage: "url('https://i.gifer.com/Ab71.gif')",
            // backgroundImage: "url('https://i.gifer.com/PYZK.gif')",
            backgroundImage: "url('https://i.gifer.com/XZ5V.gif')",
            // backgroundImage: "url('https://i.gifer.com/BHFO.gif')",
          }}
        >
          <img
            src="/images/about-pic.png"
            className="object-contain w-2/5 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
