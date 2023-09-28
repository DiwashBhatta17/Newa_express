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
import { getFood, getBreakfast,getDrink,getSnacks } from "../../../Services/CustomerService/foodItemService";
import cartService from "../../../Services/CustomerService/cartService";
import { postWishlist } from "../../../Services/CustomerService/wishListService";


function Resturent2ndComp(props) {

  const {restaurantId} = props;
  
  //popup logic
  const [popup, setPopup] = useState(false);
  const [valueData, setValueData] = useState([""]);

  const goThere = (value)=>{
    setValueData(value);

  }
  const openPopup = () => {
    setPopup(true);
  };
  function closePopup() {
    setPopup(false);
  }
  const [role, setRole] = useState(1);
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

  useEffect(() => {
    async function fetchData() {
      try {
        switch (role) {
          case 1:
            const breakfastData = await getBreakfast(restaurantId);
            setData(breakfastData);
            break;
          case 2:
            const snacksData = await getSnacks(restaurantId);
            setData(snacksData);
            break;
          case 3:
            const drinkData = await getDrink(restaurantId);
            setData(drinkData);
            break;
          default:
            // Handle default case or no fetching needed
            break;
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData(); // Fetch data when the component mounts and when 'role' changes
  }, [role, restaurantId]);


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
  async function addToCart(id) {
    try {
      const userId = localStorage.getItem("customerId");
      const response = await cartService(userId, id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  async function addToWishlist(id) {
    try {
      const userId = localStorage.getItem("customerId");

      const response = await postWishlist(userId, id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

 

  

  let componentToRender;
  switch (role) {
    case 1:
      componentToRender = <AsBreakfast setrole={setRole} />;
      break;
    case 2:
      componentToRender = <AsSnacks setrole={setRole} />;
      break;
    case 3:
      componentToRender = <AsDrinks setrole={setRole} />;
      break;
    case 4:
      componentToRender = <AsFestival setrole={setRole} />;
      break;
    default:
      componentToRender = <AsBreakfast setrole={setRole} />;
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
            
            <div
            key={index}
            className="border-2 h-[352px]   backgroundImg1 border-red-600 w-[300px] overflow-hidden"
          >
            <div className="relative h-[250px] overflow-hidden ">
            <div className=" flex flex-col absolute  items-end px-3 justify-center h-full w-full">
             <div className=" z-10 flex flex-col gap-3 text-2xl items-center">
               
             <i className=" p-1 bg-[#f22a2a] hover:scale-125 hover:bg-[#FF9800] text-white fa-regular fa-eye"></i>
              <button onClick={()=>addToCart(value.id)}><i className="p-1 bg-[#f22a2a] hover:scale-125 hover:bg-[#FF9800] text-white fa-solid fa-cart-plus"></i></button>
              <button onClick={()=>addToWishlist(value.id)}><i className="p-1 bg-[#f22a2a] hover:scale-125 hover:bg-[#FF9800] text-white fa-regular fa-heart"></i></button>
             </div>
              </div>
              <img
                className="h-[250px] -z-10 w-[650px] transition-transform transform scale-100 hover:scale-105"
                src={value.foodImage}
                alt="img"
                onClick={() => {
                  openPopup(true)
                  goThere(value.id)
                   }   }              />
              
                {popup && <Itempopup onClose={closePopup} value={valueData} />}
              </div>
              <div className="dhamilo flex flex-col justify-center items-center text-white  h-[110px]">
                <div className="text-[#FEBB41] flex gap-1">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  
                </div>
                <h1>{value.foodName}</h1>
                <div className="mx-4">
                  <img src={line} alt="" />
                </div>
                <p>Rs {value.price}</p>
              </div>
            </div>
           
          ))}

          {/* this is a comp */}
          <img className="absolut h-[600px] w-[1700px] " src={bg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Resturent2ndComp;
