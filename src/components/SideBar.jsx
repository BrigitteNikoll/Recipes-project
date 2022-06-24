import React, { useState } from "react";
import { BiHomeAlt, BiBell, BiCog, BiLogIn } from "react-icons/bi";
import control from "../assets/control.png";
import salad from "../assets/salad.png";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Inicio", url: "BiHomeAlt" },
    { title: "Órdenes", url: "BiBell" },
    { title: "Ajustes ", url: "BiCog" },
    { title: "Cerrar", url: "BiLogIn" },
  ];

  const img = [BiHomeAlt, BiBell, BiCog, BiLogIn];

  return (
    <div className="flex">
      {/* SIDEBAR */}
      <div
        className={` ${open ? "w-72" : "w-20"}
       bg-[#231E30] h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          alt="control arrow"
          className={`absolute cursor-pointer w-7 -right-3 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-4">
          <img
            src={salad}
            alt="salad logo"
            className={`w-10 cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1 className={`text-white font-medium text-xl ${!open && "hidden"}`}>
            RECIPES
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => {
            const Icon = img[index];
            return (
              <li
                key={index}
                className="flex cursor-pointer items-center gap-4 text-gray-300 text-sm hover:bg-[#EA7C69] rounded-md p-3"
              >
                <Icon style={{ }} />
                <span className={`${!open && "hidden"}`}>{Menu.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
      {/* SIDEBAR */}
      {/* CONTAINER */}
      <div className="h-screen bg-[#393C49] w-screen p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
      {/* CONTAINER */}
    </div>
  );
};

export default SideBar;
