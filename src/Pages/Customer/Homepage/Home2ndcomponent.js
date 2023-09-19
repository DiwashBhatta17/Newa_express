import React, { useState } from "react";
import Footer from "../Footer";
import line from "../../Images/RestroPageImage/line.png";
import Home3rdcomponent from "./Home3rdcomponent";
import Home4thcomponent from "./Home5thcomponent";
import Itempopup from "../ResturentPage/Itempopup";
import food from "../../Images/RestroPageImage/food2.jpg";


export default function Restcomponent() {
  const [data, setData] = useState(["", "", "", ""]);


// Number of items to display per page
  

  const [popup, setPopup] = useState(false);
  function openPopup() {
    setPopup(true);
  }
  function closePopup() {
    setPopup(false);
  }

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
        <img src="/Image/banner.gif" alt="banner" className="w-[1100px]" />
      </div>
      {/* Culture and fest food banner */}
      <div className="flex mt-5 justify-center">
        <img src="/Image/Vector.png" alt="" className=" w-[80%] h-[150px] " />
      </div>

      {/* images */}

        <div className="flex flex-wrap gap-5 mb-5 items-center mx-[120px] justify-around">
          {displayedItems.map((value, index) => (
             <div
             key={index}
             className="border-2 h-[352px]   backgroundImg1 border-red-600 w-[300px] overflow-hidden"
           >
             <div className="relative h-[250px] overflow-hidden ">
             <div className=" flex flex-col absolute  items-end px-3 justify-center h-full w-full">
              <div className=" z-10 flex flex-col gap-3 text-2xl items-center">
                
              <i className=" p-1 bg-[#f22a2a] hover:scale-125 hover:bg-[#FF9800] text-white fa-regular fa-eye"></i>
               <i className="p-1 bg-[#f22a2a] hover:scale-125 hover:bg-[#FF9800] text-white fa-solid fa-cart-plus"></i>
               <i className="p-1 bg-[#f22a2a] hover:scale-125 hover:bg-[#FF9800] text-white fa-regular fa-heart"></i>
              </div>
               </div>
               <img
                 className="h-[250px] -z-10 w-[650px] transition-transform transform scale-100 hover:scale-105"
                 src={food}
                 alt="img"
                 onClick={openPopup}
               />
             
               {popup && <Itempopup onClose={closePopup} />}
             </div>
             <div className="dhamilo flex flex-col justify-center items-center text-white  h-[110px]">
               <div className="text-[#FEBB41] flex gap-1">
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 
               </div>
               <h1>Samay Baji</h1>
               <div className="mx-4">
                 <img src={line} alt="" />
               </div>
               <p>Rs 350</p>
             </div>
           </div>
          ))}
            


        {/* this is a comp */}
      </div>

      <div className=" flex justify-center items-center mx-[130px] mt-[-15px] mb-[10px] gap-3">
        <div className="border-2 border-black w-full  "></div>
        <div className="flex justify-center items-center my-4 gap-3 ">
          <button
            className="bg-[#EC2633] px-3 py-1 text-white"
            onClick={handlePrev}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            className="bg-[#FF9800] px-3 py-1 text-white"
            onClick={handleNext}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <div className="border-2 border-black w-full"></div>
      </div>
    </div>
  );
}
