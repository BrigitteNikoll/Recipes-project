import React, { useState } from "react";
import control from "../assets/control.png";
import salad from "../assets/salad.png";

const NavBar = () => {
  const [open, setOpen] = useState(true);
/*   const Menus = [
    { title: "Inicio", src: "setting" },
    { title: "Órdenes", src: "Chat" },
    { title: "Ajustes ", src: "Calendar" },
    { title: "Cerrar", src: "User", gap: true },
  ]; */

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#231E30] h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          alt="dmvdsv"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={salad}
            alt="sdljmcs"
            className={`cursor-pointer duration-500 w-10 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            RECIPES
          </h1>
        </div>
        {/* <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-3 cursor-pointer hover:bg-[#EA7C69] text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
            >
              <img src={`../assets/setting.png`} alt="iconos" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul> */}
      </div>
      <div className="h-screen flex-1 p-7 bg-[#393C49]">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};

export default NavBar;
