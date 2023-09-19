import React, { useEffect, useState } from "react";
import AsBreakfast from "./menuNavbar/asBreakfast";
import AsSnacks from "./menuNavbar/asSnacks";
import AsDrinks from "./menuNavbar/asDrinks";
import AsFestival from "./menuNavbar/asFestival";
import food from "../../Images/RestroPageImage/food2.jpg";
import line from "../../Images/RestroPageImage/line.png";
import bg from "../../Images/bg3.png";
import Itempopup from "./Itempopup";
import getAllrestaurantService, {getBannerImage,getProfileImage} from "../../../Services/CustomerService/getAllrestaurantService";
import { Link } from "react-router-dom";


function Resturent2ndComp() {
  
  //popup logic
  const [popup, setPopup] = useState(false);
  function openPopup() {
    setPopup(true);
  }
  function closePopup() {
    setPopup(false);
  }
  const [role, setrole] = useState(1);
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



  const itemsPerPage = 6; // Number of items to display per page
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
  //get all restaurant service call here

 

  

  let componentToRender;

  switch (role) {
    case 1:
      componentToRender = <AsBreakfast setrole={setrole} />;
      break;
    case 2:
      componentToRender = <AsSnacks setrole={setrole} />;
      break;
    case 3:
      componentToRender = <AsDrinks setrole={setrole} />;
      break;
    case 4:
      componentToRender = <AsFestival setrole={setrole} />;
      break;
    default:
      componentToRender = <AsBreakfast setrole={setrole} />;
      break;
  }
  return (
    <>
      {" "}
      {componentToRender}
      <div className=" backgroundImg mt-5">
        <div className=" flex justify-end mx-[145px] mb-4 gap-3">
          <button className="bg-[#EC2633] px-2 text-white" onClick={handlePrev}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className="bg-[#FF9800] px-2 text-white" onClick={handleNext}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>

        <div className="flex flex-wrap gap-5 items-center mx-[120px] justify-around">
          {displayedItems.map((value, index) => (
            <Link to={`restaurant/${value.restaurantId}`}>
            <div
              key={index}
              className="border-2 h-[352px] backgroundImg1 border-red-600 w-[300px] overflow-hidden"
            >
              <div className="relative h-[250px] overflow-hidden ">
              <div className=" flex flex-col absolute z-20 items-end px-3 justify-center h-full w-full">
               <div className="flex flex-col gap-3 text-2xl items-center">
                 
               <i className=" p-1 bg-[#f22a2a] hover:scale-125 hover:bg-[#FF9800] text-white fa-regular fa-eye"></i>
                <i className="p-1 bg-[#f22a2a] hover:scale-125 hover:bg-[#FF9800] text-white fa-solid fa-cart-plus"></i>
                <i className="p-1 bg-[#f22a2a] hover:scale-125 hover:bg-[#FF9800] text-white fa-regular fa-heart"></i>
               </div>
                </div>
                <img
                  className="h-[250px] w-[650px] transition-transform transform scale-100 hover:scale-105"
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
            </Link>
          ))}

          {/* this is a comp */}
          <img className="absolut h-[600px] w-[1700px] " src={bg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Resturent2ndComp;
