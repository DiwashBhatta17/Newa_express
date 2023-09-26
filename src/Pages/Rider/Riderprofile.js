import React from "react";

export default function Riderprofile() {
  return (
    <div className="Restpop fixed inset-0 flex items-center justify-center z-50 backdrop-blur backdrop-filter bg-opacity-40 cursor-default ">
      <div className="contar h-[440px] w-[440px] border-1 bg-[white] p-[0px]">
        <div className=" flex header bg-[#e8e8e8eb] h-[80px] ">
          <img src="/Image/newaExpress.png" alt="Logo" className="h-[90px]" />
          <p className="a ml-7 mt-[25px] text-[#FB6612] font-semibold  text-base">
            Add Restaurants to your Site
          </p>
          <button
            className="x ml-[80px] mt-[0px] font-extrabold text-[20px] text-black"
            // onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="middle flex">
          <p className=" text-black mt-4 ml-7 font-semibold text-[15px] pr-[10px]">
            Restaurant Name:
          </p>{" "}
          <input
            type="text"
            className="bg-[#fb671233] mt-4 border-[#FB6612] border-1 rounded-[5px] h-fit text-black"
            // value={postdata.restaurantName}
            // onChange={handleRestaurantNameChange}
          />
          <p className=" ml-[-275px] mt-[80px] text-black font-semibold pr-[10px]">
            UserName:
          </p>
          <input
            type="text"
            className="bg-[#fb671233] mt-[80px] border-[#FB6612] border-1 rounded-[5px] h-fit text-black"
            // value={postdata.username}
            // onChange={handleUsernameChange}
          />
          <p className=" ml-[-255px] mt-[130px] text-black font-semibold pr-[10px]">
            Address:
          </p>
          <input
            type="text"
            className="bg-[#fb671233] mt-[130px] border-[#FB6612] border-1 rounded-[5px] h-fit text-black"
            // value={postdata.restaurantAddress}
            // onChange={handleRestaurantAddressChange}
          />
          <p className=" ml-[-252px] mt-[180px] text-black font-semibold pr-[10px]">
            Contact:
          </p>
          <input
            type="text"
            className="bg-[#fb671233] mt-[180px] border-[#FB6612] border-1 rounded-[5px] h-fit text-black"
            // value={postdata.phone}
            // onChange={handlePhoneChange}
          />
          <p className=" ml-[-280px] mt-[230px] text-black font-semibold pr-[10px]">
            Description:
          </p>
          <textarea
            type="text"
            className="bg-[#fb671233] mt-[230px] border-[#FB6612] border-1 rounded-[5px] h-fit text-black w-[200px]"
            // value={postdata.tagline}
            // onChange={handleTaglineChange}
          />
          <button
            className="ad border-1 border-green-300 bg-[#3aff3a28] h-fit mt-[310px] w-[64px] hover:bg-[#3fb83fe8] rounded-[10px] text-teal-800"
            // onClick={handleButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
