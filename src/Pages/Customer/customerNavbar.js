import React from "react";
import logo from "../Images/Logo.png";

function CustomerNavbar() {
  return (
    <div className="w-full  absolute">
      <div className="flex justify-between items-center mx-[80px]">
        <div>
          <img className="w-[150px]" src={logo} alt="" />
        </div>
        <div className="flex gap-5 text-white">
          <a className=" hover:text-red-700 hover:underline underline-offset-4" href="#">Home</a>
          <a className=" hover:text-red-700 hover:underline underline-offset-4" href="#">Login</a>
          <a className=" hover:text-red-700 hover:underline underline-offset-4" href="#">Signup</a>
        </div>
      </div>
    </div>
  );
}

export default CustomerNavbar;
