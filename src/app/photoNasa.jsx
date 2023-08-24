"use client";

import React, { useEffect } from "react";

const NasaPotd = () => {
  const [data, setData] = React.useState();
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=byAfEg7Pt9e9vM3BKXdSDbwxd1AUbDTiCghfHmsS`
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <span className="font-bold text-[5vw] text-red-600">
        Nasa Photo of the Day
      </span>
      <img src={data?.hdurl} />
      <span className="font-bold md:text-[3vw] text-red-600">
        {data?.title}
      </span>
      <span className="font-bold md:text-[2.5vw] text-gray-600">
        {data?.date}
      </span>
      <span className="md:text-[1.5vw] md:w-1/2 text-center text-white">
        {data?.explanation}
      </span>
    </div>
  );
};

export default NasaPotd;
