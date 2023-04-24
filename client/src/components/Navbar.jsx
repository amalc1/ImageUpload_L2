import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex bg-gray-200 items-center justify-between  py-3 md:px-14  px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[poppins]
          text-black"
        >
          Image Upload
        </div>
      </div>
    </div>
  );
}

export default Navbar;
