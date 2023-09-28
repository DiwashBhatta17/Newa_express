import React from "react";
import CustomerNavbar from "../customerNavbar";
import Browse2 from "./Browse2";
import { useParams } from "react-router-dom";

function Browse1() {
  return (
    <>
      <CustomerNavbar />
      <div className="ImageheaderSection  flex flex-col justify-center items-center  h-[40vh]">
        <div className="dhamilo flex flex-col justify-center items-center w-full  h-[100vh] ">
         
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
