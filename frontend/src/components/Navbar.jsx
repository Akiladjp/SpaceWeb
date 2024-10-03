import React from "react";
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="fixed top-0 text-white flex justify-between w-full py-4 bg-black/50">
      <div className="flex items-center w-[60%]">
        <img src={logo} alt="" className="h-8" />
        <h1 className="ml-4 text-2xl font-bold">TCJ-SPACE</h1>
      </div>
      <div className="flex w-[40%] justify-between">
        <ul className="flex gap-16 text-xl">
          <li className="hover:text-yellow-300 hover:underline">
            <a href="#">About</a>
          </li>
          <li className="hover:text-yellow-300 hover:underline">
            <a href="#">Technology</a>
          </li>
          <li className="hover:text-yellow-300 hover:underline">
            <a href="#">Galaxy</a>
          </li>
          <li className="hover:text-yellow-300 hover:underline">
            <a href="#">Satelite</a>
          </li>
        </ul>
        <div className="text-xl mx-8 flex">
          <button className="border border-white px-3 py-1 my-auto rounded-xl hover:bg-white hover:text-black hover:scale-105 active:scale-95">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
