import React, { useState } from "react";
import Footer from "../Footer";
import line from "../../Images/RestroPageImage/line.png";
import Home3rdcomponent from "./Home3rdcomponent";
import Home4thcomponent from "./Home5thcomponent";

export default function Restcomponent() {

  const [data, setData] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const itemsPerPage = 3; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage + 1 >= Math.ceil(data.length / itemsPerPage) ? 0 : prevPage + 1
    );
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? Math.ceil(data.length / itemsPerPage) - 1 : prevPage - 1
    );
  };

  const displayedItems = data.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="middlepart flex flex-col ">
      <div className="banner pt-[20px] border flex justify-center">
        <img src="/Image/banner.gif" alt="banner" className="w-full" />
      </div>
      {/* Culture and fest food banner */}
      <div className="flex mt-5 justify-center">
        <img src="/Image/Vector.png" alt="" className=" w-[80%] h-[150px] " />
      </div>

      {/* images */}
      <div className=" flex justify-end mx-[145px]  my-4 gap-3">
          <button className="bg-[#EC2633] px-2 text-white" onClick={handlePrev}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className="bg-[#FF9800] px-2 text-white" onClick={handleNext}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        

        <div className="flex flex-wrap gap-5 mb-5 items-center mx-[120px] justify-around">
          {displayedItems.map((value, index) => (
            <div
              key={index}
              className="border-2 h-[400px] backgroundImg1 border-black w-[330px] overflow-hidden"
            >
              <div className="relative h-[280px] overflow-hidden ">
                <img
                  className="h-[280px] w-[650px] transition-transform transform scale-100 hover:scale-110"
                  src="/Image/samay.png"
                  alt=""
                />
              </div>
              <div className="dhamilo flex flex-col justify-center items-center text-white  h-[120px]">
                <div className="text-[#d4f532] flex gap-1">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <h1>Samaya Bhajiya</h1>
                <div className="mx-4">
                  <img src={line} alt="" />
                </div>
                <p>Rs 350</p>
              </div>
            </div>
          ))}

          {/* this is a comp */}
        </div>
        
        
        



     

     
    </div>
  );
}
