import React from "react";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace } from "react-icons/fa6";
import { FaSpaceAwesome } from "react-icons/fa6";
import  waveGIF  from '../assets/waveGif.gif';

export const Services = () => {
  const ServiceData = [
    {
      title: "HST",
      content: "300-1500km",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      icon: <FaReact className="text-7xl" />,
      aosDelay: "300",
    },
    {
      title: "ISS",
      content: "500-1500km",
      description:
        "it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
      icon: <FaShuttleSpace className="text-7xl" />,
      aosDelay: "500",
    },
    {
      title: "GPS",
      content: "300-1500km",
      description:
        "Part of the Global Positioning System (GPS) used for navigation.",
      icon: <FaSpaceAwesome className="text-7xl" />,
      aosDelay: "700",
    },
  ];

  return (
    <div>
      <div className="w-full top-[700px] relative z-10">
        <div className="min-h-[400px] bg-black flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-32 text-white pt-20">
            {ServiceData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col justify-center min-h-[280px] items-center bg-gradient-to-b from-[#394b70] to-[#02385c] max-w-[250px] rounded-xl"
              >
                <div className="">{data.icon}</div>
                <h1 className="text-3xl font-bold mt-4">{data.title}</h1>
                <p className="mb-4">{data.content}</p>
                <div>
                  <p className="m-2">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <img src={waveGIF} alt="" className="h-[300px] w-full object-cover mix-blend-screen -translate-y-24 relative z-0 top-12" />
          </div>
        </div>
      </div>
    </div>
  );
};
