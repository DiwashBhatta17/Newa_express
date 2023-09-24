import React, { useEffect, useState } from "react";
import logo from "../../Images/Logo.png";
import profileService from "../../../Services/CustomerService/profileService";

function CustomerProfile() {
  const [data, setData] = useState({});
  const userId = localStorage.getItem("customerId");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await profileService(userId);
        setData(response);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (userId) {
  }

  return (
    <div className="flex justify-around w-[] gap-4">
      {/* item goes in this div  */}

      <div className=" flex items-center mt-4 flex-col ">
        <img className="w-[200px]" src={logo} alt="" />
        <h1 className="text-black text-xl font-bold">{data.customerName}</h1>
      </div>
      <div className="flex w-[60%] items-start mt-5 flex-col">
        <label>Name</label>
        <input
          className="border-1 border-black rounded-lg bg-[#e0dcdcc1]"
          type="text"
        />
        <label className="mt-3" htmlFor="">
          Email
        </label>
        <input
          className="border-1 border-black rounded-lg bg-[#e0dcdcc1]"
          type="text"
        />
        <label className="mt-3" htmlFor="">
          Phone
        </label>
        <input
          className="border-1 border-black rounded-lg bg-[#e0dcdcc1]"
          type="text"
          name=""
          id=""
        />

        <button className="border mt-5 px-2 py-1 bg-[#38cf2a] text-white rounded-lg">
          Save Changes
        </button>
      </div>

      {/* Inside This */}
    </div>
  );
}

export default CustomerProfile;
