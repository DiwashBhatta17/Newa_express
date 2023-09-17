import React from "react";
import CustomerNavbar from "../customerNavbar";
import Browse2 from "./Browse2";

function Browse1() {
  return (
    <>
      <CustomerNavbar />
      <div className="ImageheaderSection  flex flex-col justify-center items-center  h-[40vh]">
        <div className="dhamilo flex flex-col justify-center items-center w-full  h-[100vh] ">
          {/* <div className="flex mt-2  justify-end outline-none bg-[#ffffff87] w-[580px] h-[45px]  rounded-[10px] rounded-full">
          <div>
            {" "}
            <input
              type="text"
              className=" relative outline-none bg-transparent  text-black border-black   w-[500px] h-[47px]  rounded-[10px]"
            />
          </div>
          <img
            src="/Image/search.png"
            alt="icon"
            className="w-[20px] h-[20px] mt-[10px] mr-4 "
          />
        </div> */}
          <p className=" text-[#ffffff] mt-5 flex justify-center ">
            <img className="w-[70%]" src="/Image/browseRestro.png" alt="" />
          </p>
          {/* <div> */}
        </div>
      </div>
      <Browse2 />
    </>
  );
}

export default Browse1;
