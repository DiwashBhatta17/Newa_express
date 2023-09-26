import React, { useState } from "react";
import { Link } from "react-router-dom";
import Riderprofile from "./Riderprofile";

export default function Riderdashboard() {
  const [updateprofile, setUpdateprofile] = useState();

  function handleopenClick() {
    setUpdateprofile(true);
  }
  function handlecloseClick() {
    setUpdateprofile(false);
  }
  return (
    <>
      <div className="header flex w-screen fixed justify-between shadow-xl h-[90px] itmes-center bg-[#ffffff] py-4 px-5">
        <div className="flex gap-2 ">
          <Link to="/">
            <img
              src="/Image/newaExpress.png"
              alt="logo"
              className=" h-[80px] mt-[-20px] hover:cursor-pointer"
            />
          </Link>
          <img
            src="/Image/profile.png"
            alt="profile"
            className="fa-solid text-2xl mt-[2px] ml-[400px] text-black fa-user-lock hover:cursor-pointer
            "
            onClick={handleopenClick}
          />
          {updateprofile && <Riderprofile onClose={handlecloseClick} />}
          <h1 className="text-2xl font-bold text-black">Rider Name</h1>
        </div>
        <Link
          to="/"
          className=" px-4 py-2 rounded-full border-2 border-[#ff4d4d] hover:bg-[#ff0000] hover:text-white"
        >
          Logout
        </Link>
      </div>

      <div className="flex justify-center pt-[140px] ">
        <div className="">
          <h1 className="text-2xl font-bold text-[#2F80ED]">
            View Your Deliveries
          </h1>
          <p>The following are the total deliveries assigned to you. </p>

          <div className="w-[1000px] bg-[#ffffff] shadow-xl mt-[40px] ">
            <table className="table table-hover  table-striped">
              <thead>
                <th>Customer Name</th>
                <th>Restaurant Name</th>
                <th>Restaurant Address</th>
                <th>Customer Address</th>
                <th>Customer Contact</th>
              </thead>

              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
