import React, { useState } from "react";
import logo from "../Images/Logo.png";
import Login from "../Login/Login";
import Signup from "../Login/Siguup";
import Otp from "../Login/Otp";
import { Link } from "react-router-dom";

function CustomerNavbar() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [otp, setOtp] = useState(false);
  return (
    <>
      <Login login={login} setLogin={setLogin} />
      <Signup signup={signup} setOtp={setOtp} setSignup={setSignup} />
      <Otp setOtp={setOtp} setLogin={setLogin} otp={otp} />
      <div className="w-full m  absolute">
        <div className="flex justify-between items-center mx-[130px] mt-[15px]">
          <div>
            <Link to="/">
              <img className="h-[127px] mt-[8px]" src={logo} alt="" />
            </Link>
          </div>
          <div className="flex gap-5 text-white">
            <Link
              to="/"
              className="  hover:text-red-700 hover:underline duration-100 underline-offset-4"
            >
              Home
            </Link>

            <Link
              to="/browseResturant"
              className=" hover:text-red-700 hover:underline underline-offset-4"
              href="#"
            >
              Browse Resturants
            </Link>
            <button
              onClick={() => setLogin(true)}
              className=" hover:text-red-700 hover:underline underline-offset-4"
              href="#"
            >
              Login
            </button>
            <button
              onClick={() => setSignup(true)}
              className=" hover:text-red-700 hover:underline underline-offset-4"
              href="#"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerNavbar;
