import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { getFoodById } from "../../../Services/CustomerService/foodItemService";
import cartService from "../../../Services/CustomerService/cartService";
import imag1 from "../../Images/addtocart.png";
import { postWishlist } from "../../../Services/CustomerService/wishListService";

export default function Itempopup(props) {

  const { onClose, value } = props;
  console.log(value);
  //Quantity update
  
  const [data, setData] = useState("");

  async function fetchData() {
    try {
      const response = await getFoodById(value);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function addToCart() {
    try {
      const userId = localStorage.getItem("customerId");

      const response = await cartService(userId, value);
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
  useEffect(() => {
    fetchData();
  }, []);

 
  //data fetching


  return (
    <div className=" z-10 fixed dhamil backdrop-blur top-0 left-0 w-full h-screen flex items-center justify-center ">
      <div className="roughbg w-[580px] h-[350px] flex justify-around flex-col">
       <div className="flex gap-4">
       <img
          src={data.foodImage}
          alt="samay"
          className="h-[250px] w-[250px] mt-8 ml-5"
        />

        <div>
          <div className="flex mt-4">
            <h1 className="text-white font-semibold text-[25px] ">
              {data.foodName}
            </h1>
            <button
              className="text-white absolute ml-[230px] -mt-[20px] font-bold text-[22px] hover:cursor-pointer"
              onClick={onClose}
            >
              {" "}
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <p className="text-white mt-4 ">
            {data.description}
          </p>
          <div className="flex  gap-5 justify-between  text-white mt-5
          ">
            <div className="flex items-center gap-4">
              <h1 className="font-bold">Price: </h1>
              <p>Rs {data.price}</p>
            </div>

            <button onClick={()=>addToWishlist(data.id)} className=""><i className="fa-solid text-2xl mr-4 fa-heart"></i></button>
            
            
          </div>
          <button className="mt-5" onClick={addToCart}>
          <img className="w-[200px]" src={imag1} alt="" />
          {" "}
         
        </button>
          
        </div>
       </div>

       
      </div>
    </div>
  );
}
