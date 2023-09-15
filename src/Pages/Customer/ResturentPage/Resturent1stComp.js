import React from "react";
import left from "../../Images/RestroPageImage/leftVessel.png";
import right from "../../Images/RestroPageImage/rightVessel.png";
import background from "../../Images/RestroPageImage/bgRestu.png";
import Resturent2ndComp from "./Resturent2ndComp";
import Footer from "../Footer";
import CustomerNavbar from "../customerNavbar";

function Resturent1stComp() {
  return (
    <div>
      <CustomerNavbar/>
      <div className="border-2 border-black">
        <img className="h-[70vh] w-full" src={background} alt="" />
       
        <div className="flex -
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
         absolute justify-center items-center bottom-[120px] left-1/2 transform -translate-x-1/2">
          <img
            className="h-[200px]  w-[200px] rounded-full"
            src={background}
            alt="Profile"
          />
        </div>
      </div>

      <div className=" py-[80px] border  backgroundImg2">
        <div className="flex mx-[100px] justify-around items-center">
          <img className="h-[400px]" src={right} alt="" />
          <div className="w-[400px] text-center">
            <h1 className="text-5xl text-[#6A707E] font-bold ">
              Swagatam Nepali Khaja Ghar

            </h1>
          </div>
          <img className="h-[400px]" src={left} alt="" />
        </div>
        <div className="mb-5 flex items-center justify-center ">
          <p className="text-center w-[400px] mt-2">
            Experience Authentic newari cuisine with your loved ones in the
            comfort of your homes.
          </p>
        </div>
        <hr className="border-[#EC2633] border-2 mx-[200px] mb-5" />
      </div>
      <Resturent2ndComp/>

     
      <Footer/>
    </div>
  );
}

export default Resturent1stComp;
