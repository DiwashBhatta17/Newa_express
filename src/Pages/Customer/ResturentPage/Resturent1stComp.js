import React from "react";
import left from "../../Images/RestroPageImage/leftVessel.png";
import right from "../../Images/RestroPageImage/rightVessel.png";
import background from "../../Images/RestroPageImage/bgRestu.png";

function Resturent1stComp() {
  return (
    <div>
      <div className="relative">
        <img className="h-[80vh] w-full" src={background} alt="" />
        <button className="text-bold text-white shadow-lg bg-[#EC2633] absolute bottom-[20px] px-4 py-2 rounded-full right-[100px]">
          Check Restaurant
        </button>
        <div className="flex justify-center items-center absolute -bottom-[100px] left-1/2 transform -translate-x-1/2">
          <img
            className="h-[200px] w-[200px] rounded-full"
            src={background}
            alt="Profile"
          />
        </div>
      </div>

      <div className=" py-[80px]  backgroundImg2">
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
    </div>
  );
}

export default Resturent1stComp;
