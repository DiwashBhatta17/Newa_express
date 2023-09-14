import React from "react";

export default function Topcomponent() {
  return (
    <>
      <div className="ImageheaderSection h-[600px]">
        <div className="header  h-[200px] flex">
          <img
            src="/Image/newaExpress.png"
            alt="Logo"
            className="logo h-[150px] ml-[50px]"
          />

          <h1 className="ml-[600px] mt-[30px] text-[18px] text-[white] hover:text-[red] hover:cursor-pointer">
            Home
          </h1>
          <h1 className="ml-[50px] mt-[30px] text-[18px] text-[white] hover:text-[red] hover:cursor-pointer">
            Browse Restaurants
          </h1>
          <h1 className="ml-[40px] mt-[30px] text-[18px] text-[white] hover:text-[red] hover:cursor-pointer">
            LogIn
          </h1>
          <h1 className="ml-[40px] mt-[30px] text-[18px] text-[white] hover:text-[red] hover:cursor-pointer">
            Signup
          </h1>
        </div>
        <p className=" text-[#ffffff] ml-[350px] text-[16px] font-bold mt-[40px]">
          Order Authentic Newari food from the widest range of Newari
          restaurants.{" "}
        </p>
        <input
          type="text"
          className="homesearch bg-[white] ml-[400px] w-[450px] h-[30px] rounded-[10px]"
        />
        <img
          src="/Image/search.png"
          alt="icon"
          className="ml-[800px] mt-[-25px]"
        />
      </div>
    </>
  );
}
