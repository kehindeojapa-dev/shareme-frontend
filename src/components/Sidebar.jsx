// @ts-nocheck
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
// import { IoIosArrowForward } from "react-icons/io";
import logo from "../assets/logo.png";

// Active & NotActive Stykes
const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-fuchsia-300 transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold text-fuchsia-400 border-r-2 border-fuchsia-500 transition-all duration-200 ease-in-out capitalize";

const categories = [
  { name: "Animal" },
  { name: "Wallpapers" },
  { name: "Gaming" },
  { name: "Coding" },
  { name: "Photography" },
];

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <section className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <section className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 my-6 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <main className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill /> Home
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">
            Discover Categories
          </h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              {category.name}
            </NavLink>
          ))}
        </main>
      </section>
      {user && (
        <Link
          to={`user-profile/${user?._id}`}
          className="flex items-center my-5 mb-3 gap-2 p-2 bg-white shadow-lg rounded-lg mx-3"
          onClick={handleCloseSidebar}
        >
          <img
            src={user?.image}
            alt="user profile"
            className="w-10 h-10 rounded-full"
          />
          <p>{user?.username}</p>
        </Link>
      )}
    </section>
  );
};

export default Sidebar;
