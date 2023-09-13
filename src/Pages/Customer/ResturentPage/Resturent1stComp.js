import React from "react";
import left from "../../Images/leftVessel.png";
import right from "../../Images/rightVessel.png";
import background from "../../Images/Rectangle 4369.png";

function Resturent1stComp() {
  return (
    <div>
      <div className="relative">
        <img className="h-[60vh] w-full" src={background} alt="" />
        <button className="text-bold text-white shadow-lg bg-[#44be48] border absolute bottom-[10px] px-4 py-1 rounded-full right-[100px] ">
          Explore
        </button>
      </div>

      <div className=" py-4  backgroundImg2">
        <div className="flex mx-[100px] justify-around items-center">
          <img className="h-[400px]" src={right} alt="" />
          <h1 className="text-4xl text-[#d53434] font-bold ">Resturent Name</h1>
          <img className="h-[400px]" src={left} alt="" />
        </div>
        <p className="text-center mt-2">
          Experience Authentic newari cuisine with your loved ones in the
          comfort of your homes.
        </p>
      </div>
    </div>
  );
}

export default Resturent1stComp;
