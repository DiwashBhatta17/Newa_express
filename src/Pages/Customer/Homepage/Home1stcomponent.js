import React, { useState } from "react";
import Restcomponent from "./Home2ndcomponent";
import Home3rdcomponent from "./Home3rdcomponent";
import Home4thcomponent from "./Home4thcomponent";
import Home5thcomponent from "./Home5thcomponent";
import Footer from "../Footer";
import CustomerNavbar from "../customerNavbar";
import { useNavigate } from "react-router-dom";
import ReviewPopup from "./ReviewPopup";

export default function Topcomponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Use navigate to programmatically navigate to the browseRestaurant route
    if (searchQuery.trim() !== "") {
      // Use navigate to programmatically navigate to the browseRestaurant route with the query parameter.
      navigate(`/browseRestaurant/${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <CustomerNavbar />
      {/* <ReviewPopup/> */}
      <div className="ImageheaderSection  flex flex-col justify-center items-center  h-[100vh]">
        <div className="dhamilo flex flex-col justify-center items-center w-full  h-[100vh] ">
          <p className=" text-[#ffffff]  text-xl mt-5 font-semibold">
            Search Authentic Newari food from the widest range of Newari
            restaurants.
          </p>
          {/* <div> */}

          <div className="flex mt-4 justify-end outline-none bg-[#ffffffb8] w-[750px] h-[42px]  rounded-full">
            <div className="w-[700px]">
              {" "}
              <input
                type="text"
                className="mt-[=10px]  relative outline-none bg-transparent text-black border-black w-[750px] h-[40px] ml-3 rounded-[10px]"
                placeholder="Search for a restaurant..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              onClick={handleSearch}
              className="w-[27px] z-10 h-[27px] mt-2 mr-4"
            >
              <img src="/Image/search.png" alt="icon" />
            </button>
          </div>
        </div>
      </div>
      <Restcomponent />
      <Home3rdcomponent />
      <Home4thcomponent />
      <Home5thcomponent />
      <Footer />
    </>
  );
}
