import React, { useState } from "react";
import Restcomponent from "./Home2ndcomponent";
import Home3rdcomponent from "./Home3rdcomponent";
import Home4thcomponent from "./Home4thcomponent";
import Home5thcomponent from "./Home5thcomponent";
import Footer from "../Footer";
import CustomerNavbar from "../customerNavbar";
import Login from "../../Login/Login";
import Signup from "../../Login/Siguup";

export default function Topcomponent() {

  

  return (
    <>
   
    <CustomerNavbar/>
      <div className="ImageheaderSection  flex flex-col justify-center items-center  h-[100vh]">
        <div className="dhamilo flex flex-col justify-center items-center w-full  h-[100vh] ">
        <p className=" text-[#ffffff]  text-2xl mt-5 ">
          Search Authentic Newari food from the widest range of Newari
          restaurants.
        </p>
        {/* <div> */}

        <div className="flex mt-4 justify-end outline-none bg-[#ffffffb8] w-[880px] h-[50px]  rounded-[10px] rounded-full">
          <div>
            {" "}
            <input
              type="text"
              className=" relative outline-none bg-transparent  text-black border-black   w-[810px] h-[48px]  rounded-[10px]"
            />
          </div>
          <img
            src="/Image/search.png"
            alt="icon"
            className="w-[30px] h-[30px] mt-2 mr-4 "
          />
        </div>
        </div>
      </div>
      <Restcomponent />
      <Home3rdcomponent/>
      <Home4thcomponent/>
      <Home5thcomponent/>
      <Footer/>
    </>
  );
}
