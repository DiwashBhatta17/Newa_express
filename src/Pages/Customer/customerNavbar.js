import React, { useState } from "react";
import logo from "../Images/Logo.png";
import Login from "../Login/Login";
import Signup from "../Login/Siguup";
import Otp from "../Login/Otp";
import { Link } from "react-router-dom";

function CustomerNavbar() {

  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [otp, setOtp] = useState(false)
  return (
    <>
     <Login login={login} setLogin={setLogin}/>
    <Signup signup={signup} setOtp={setOtp} setSignup={setSignup}/>
    <Otp setOtp={setOtp}  setLogin={setLogin} otp={otp}/>
    <div className="w-full  absolute">
      <div className="flex justify-between items-center mx-[80px]">
        <div>
          <img className="w-[150px]" src={logo} alt="" />
        </div>
        <div className="flex gap-5 text-white">
          <Link to="/" className=" hover:text-red-700 hover:underline underline-offset-4" href="#">Home</Link>
          <button onClick={()=>setLogin(true)} className=" hover:text-red-700 hover:underline underline-offset-4" href="#">Login</button>
          <button onClick={()=>setSignup(true)} className=" hover:text-red-700 hover:underline underline-offset-4" href="#">Signup</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default CustomerNavbar;
