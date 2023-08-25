"use client";

import { Refresh } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const getQuote = () => {
    setLoading(true);
    fetch(`https://api.quotable.io/random`)
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        setQuote(response);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className="flex justify-center w-full p-10">
      <div
        className="flex flex-col items-center p-10 bg-center bg-no-repeat bg-cover border border-red-500 rounded-lg decoration-sky-50 md:space-y-10"
        style={
          loading
            ? {
                backgroundImage: "url('https://i.gifer.com/ZWdx.gif')",
              }
            : { backgroundImage: "url('https://i.gifer.com/Cal.gif')" }
        }
      >
        <div className="font-bold text-[18px] md:text-[3vw] text-center font-poppins">
          {quote?.content}
        </div>
        <div className="font-bold text-red-500 text-[2vw] font-abril">
          - {quote?.author}
        </div>
      </div>
      <div onClick={getQuote} className="cursor-pointer">
        <Refresh />
      </div>
    </div>
  );
};

export default Quote;
