import React, { useState } from "react";
import Logo from "../assests/brandlogo.png";
import Avatar from "../assests/avatar.png";
import {MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { useStateValue } from "../context/stateProvider";
// import { actionType } from "../context/reducer";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-3 md:px-7 bg-white">
      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="object-cover w-20" alt="logo" />
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <Link to="/" className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </Link>
            
            <Link className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </Link>
            <Link className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Services
            </Link>
          </motion.ul>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={() => setMenu(!menu)}
            />
            {menu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                <Link to={"/createHall"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
                <Link to='/login' className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                  SingIn <MdLogout />
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
          >
            <Link to={"/createItem"}>
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                New Item <MdAdd />
              </p>
            </Link>
            <ul className="flex flex-col">
              <li className="text-base hover:bg-slate-100 px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Home
              </li>
              <li className="text-base hover:bg-slate-100 px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Menu
              </li>
              <li className="text-base hover:bg-slate-100 px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                About Us
              </li>
              <li className="text-base hover:bg-slate-100 px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Services
              </li>
            </ul>
            <p className="m-2 p-2 rounded-md shadow-md flex items-center gap-3 cursor-pointer hover:bg-gray-300 transition-all justify-center bg-gray-200 duration-100 ease-in-out text-textColor text-base">
              Logout <MdLogout />
            </p>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
