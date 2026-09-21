import React from "react";

const logo =
  "https://media.istockphoto.com/id/2154860593/vector/sign-symbol-circle-abstract-symbol.jpg?s=2048x2048&w=is&k=20&c=ZXyHxR6RQFO2EsSE2Aw0triaw5XMQk-g4ae41kKEslE=";

const NavBar = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-between gap-4 bg-black px-4 py-3">
        <div className="flex gap-5 ">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 shrink-0 rounded-full object-cover"
          />
          <strong className="text-2xl text-white">CodeNextPro</strong>
        </div>
        <ul className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-right font-sans text-sm font-medium text-white sm:text-base md:text-xl">
          <li className="cursor-pointer hover:text-red-500 transition">Home</li>
          <li className="cursor-pointer hover:text-red-500  transition">
            About
          </li>
          <li className="cursor-pointer hover:text-red-500 transition">
            Services
          </li>
          <li className="cursor-pointer hover:text-red-500 transition">
            Information
          </li>
          <li className="cursor-pointer hover:text-red-500 transition">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
