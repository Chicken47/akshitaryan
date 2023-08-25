"use client";
import React, { useState } from "react";

const Bored = () => {
  const [participants, setParticipants] = useState(1);
  const [loading, setLoading] = useState(false);
  const [boredDeets, setBoredDeets] = useState();
  const findActivity = () => {
    setLoading(true);
    fetch(
      `https://www.boredapi.com/api/activity?participants=${
        participants ? participants : 1
      }`
    )
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        setBoredDeets(response);
        console.log(response);
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-[1366px] w-1/2 flex flex-col items-center border-white border rounded-lg p-10">
        <span className="text-[3vw] font-bold font-abril text-red-700">
          Bored? Get something to do
        </span>
        <span className="w-1/2 text-center text-[1.6vw] mt-5">
          I've got you covered. Fill in how many people you want involved in the
          activity and I'll whip something up for you.
        </span>
        <div className="flex items-center justify-center px-10 py-3  rounded-lg mt-5 space-x-3 font-alegreya bg-[#2e1e1e8d]">
          <span>Number of Participants: </span>
          <input
            type="number"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            className="w-[50px] bg-[#340f0f89]"
            max={5}
          />
          <span
            onClick={findActivity}
            className="px-3 py-2 transition-all bg-red-700 rounded-lg cursor-pointer hover:scale-110"
          >
            Go!
          </span>
        </div>
        {!loading ? (
          <span className="text-white font-extrabold font-tilt text-[3vw] mt-5 text-center">
            {boredDeets?.activity}
          </span>
        ) : (
          <img src="https://i.gifer.com/ZWdx.gif" className="w-1/3" />
        )}
      </div>
    </div>
  );
};

export default Bored;
