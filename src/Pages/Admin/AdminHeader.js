import React from "react";
import { Link } from "react-router-dom";

export default function Admin1stpage() {
  return (
    <>
      <div className="bg-[#ffffff] fixed shadow-xl h-screen">
        <div className="flex w-screen fixed justify-between shadow-xl h-[90px] itmes-center bg-[#ffffff] py-4 px-5">
          <div className="flex gap-2 ">
            <Link to="/admin">
              <img
                src="/Image/newaExpress.png"
                alt="logo"
                className=" h-[80px] mt-[-20px] hover:cursor-pointer"
              />
            </Link>
            <i className="fa-solid text-2xl mt-[2px] ml-[300px] text-black fa-user-lock"></i>
            <h1 className="text-2xl font-bold text-black">Admin</h1>
          </div>
          <Link
            to="/"
            className=" px-4 py-2 rounded-full border-2 border-[#a42222]"
          >
            Logout
          </Link>
        </div>
        <div className="w-[30vh] top-[11vh] fixed flex flex-col items-start p-5 gap-4 h-[70vh] mt-4 bg-white shadow-xl">
          <div className="flex gap-3">
            <i className="fa-light text-xl fa-table-columns"></i>
            <Link to="/admin" className="mt-[3px] ">
              Dashboard
            </Link>
          </div>

          <div className="flex gap-2">
            <i className="fa-solid mt-1 fa-users"></i>
            <Link to="/adminRestaurant" href="#">
              Restaurant
            </Link>
          </div>

          <div className="flex gap-[10px]">
            <i className="fa-regular mt-1 fa-hourglass"></i>
            <Link to="/adminRider" className="ml-2">
              Riders
            </Link>
          </div>

          <div className="flex gap-3">
            <i className="fa-regular mt-1 fa-chart-bar"></i>
            <Link to="/adminreviews">Reviews</Link>
          </div>
        </div>
        <div className="bg-white fixed top-[84vh] left-0 mt-3 w-[30vh] h-[10vh] flex flex-col shadow-xl items-center gap-1">
          <h1 className="mt-2">Newa Express</h1>
          <p>version: 1.0.0.11</p>
        </div>
      </div>
    </>
  );
}
