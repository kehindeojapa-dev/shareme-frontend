import React, { useEffect, useState, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";

// Components
import { Sidebar, UserProfile } from "../components";
import Pins from "./Pins";
import { client } from "../client";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <section className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      <aside className="flex md:hidden flex-row">
        <HiMenu />
      </aside>
    </section>
  );
};

export default Home;
