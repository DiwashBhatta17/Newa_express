import React, { useState } from "react";
import Home5thcomponent from "./Home5thcomponent";

function Home4thcomponent() {
  const [data, setData] = useState(["", "",""]);

  const itemsPerPage = 2; // Number of items to display per page
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

    // reviewSection   src="/Image/next.png"    src="/Image/nextr.png"
    <div className="h-[260px] reviewSection border-2 border-[#EC2633]">
      <h1 className="text-center text-2xl font-bold text-white">CUSTOMER REVIEWS</h1>

      <div className="flex gap-5 justify-center items-center h-[80%]">
        <button onClick={handleNext}><img src="/Image/next.png" alt="" /></button>
        <div className="flex gap-5">
          {displayedItems.map((value, index) => (
            <div
              key={index}
              className="w-[550px] text-center flex flex-col items-center gap-1 text-white rounded-2xl p-4 bg-[#EC2633]"
            >
              <h1 className="text-center text-xl ml-1 font-bold">Diwash Bhatta</h1>
              <div className="text-[#d4f532] flex gap-1">
                  {/* <i className="fa-solid fa-star"></i> */}
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              
              <p>
                "I have been using this website for a while now and I love it!
                It is very easy to use, the design is clean and useful design
              </p>
            </div>
          ))}
        </div>
        <button onClick={handlePrev}><img className="" src="/Image/nextr.png" alt="" /></button>

      </div>
    </div>
  );
}

export default Home4thcomponent;
