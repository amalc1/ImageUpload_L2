import React from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="relative overflow-y-hidden">
        <Navbar />
        <Dashboard />
      </div>
    </>
  );
};

export default Home;
