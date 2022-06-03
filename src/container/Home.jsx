// @ts-nocheck
import React, { useEffect, useState, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";

// Components
import { Sidebar, UserProfile } from "../components";
import Pins from "./Pins";

// Sanity Stuff
import { client } from "../client";
import { userQuery } from "../utils/data";
import logo from "../assets/logo.png";

const Home = () => {
  //States
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const scrollRef = useRef(null);

  // Get userInfo stored in localStorage after Signing in
  const userInfo =
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  //sub is googleId
  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  useEffect(() => {
    scrollRef.current.scroll(0, 0);
  }, []);

  return (
    <section className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      <div className="flex md:hidden flex-row">
        <header className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <HiMenu
            fontSize={40}
            className="cursor-pointer text-fuchsia-500"
            onClick={() => setToggleSidebar(true)}
          />
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-28" />
          </Link>
          <Link to={`/user-profile/${user?._id}`}>
            <img src={user?.image} alt="logo" className="w-10 rounded-full" />
          </Link>
        </header>
        {/* Sidebar Slides in */}
        {toggleSidebar && (
          <aside className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer text-fuchsia-500"
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar user={user && user} closeToggle={setToggleSidebar} />
          </aside>
        )}
      </div>

      <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        <Routes>
          <Route path={"/user-profile/:userId"} element={<UserProfile />} />
          <Route path={"/*"} element={<Pins user={user && user} />} />
        </Routes>
      </div>
    </section>
  );
};

export default Home;
