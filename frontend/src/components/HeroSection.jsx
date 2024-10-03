import React from "react";

export const HeroSection = () => {
  return (
    <div>
      <div className="w-[35%] absolute top-60 text-white ml-12">
        <h1 className="text-[64px] font-bold uppercase">orbite the earth</h1>
        <p className="text-[18px] w-[80%] mt-8">
          Earth orbits the Sun in an elliptical path, similar to a slightly
          oval-shaped track. This journey takes approximately 365.25 days, which
          we call a year. The Sun's gravitational pull keeps Earth in this
          orbit, and it's this constant movement around the Sun that gives us
          our seasons.
        </p>
        <button className="bg-blue-500 text-white rounded-lg my-8 px-3 py-1 text-[18px]">
          Learn More
        </button>
      </div>
      <div className="w-full absolute z-50 bottom-52 h-[80px] bg-gradient-to-b from-[#00000000] to-[#000000]">

      </div>
    </div>
  );
};
