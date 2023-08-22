import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[1366px] flex flex-col pb-[5vw]">
        <span className="w-full text-center font-bold text-red-600 mt-10 font-poppins text-[5vw]">
          Get In Touch
        </span>
        <div
          id="contact-form"
          className="flex items-center w-full h-full text-white"
        >
          <div id="form" className="w-[70%] px-[3vw] flex flex-col space-y-5">
            <div className="flex items-center justify-between w-full space-x-5">
              <span>Name </span>
              <input className="bg-[#9e282854] px-5 py-2 rounded-lg" />
              <span>How did you get on this site? </span>
              <input className="bg-[#9e282854] px-5 py-2 rounded-lg" />
            </div>
            <div className="flex items-center">
              <span>Purpose </span>
              <input className="w-full ml-5 bg-[#9e282854] px-5 py-2 rounded-lg" />
            </div>
            <div className="flex items-center">
              <span>Where Can I Reach You to Revert </span>
              <input className="bg-[#9e282854] px-5 py-2 rounded-lg ml-5" />
            </div>
          </div>
          <div id="red" className="w-[30%] h-full bg-red-600 text-red-600">
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
