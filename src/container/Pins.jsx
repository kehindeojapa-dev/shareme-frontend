// @ts-nocheck
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Pins Components
import { Navbar, Feed, Search, CreatePin, PinDetail } from "../components";

const Pins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <section className="px-2 md:px-5">
      <nav className="bg-gray-50">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user}
        />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route
            path="/pin-detail/:pinId"
            element={<PinDetail user={user} />}
          />
          <Route path="/create-pin" element={<CreatePin user={user} />} />
          <Route
            path="/search"
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
        </Routes>
      </main>
    </section>
  );
};

export default Pins;
