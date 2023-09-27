import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { getFoodById } from "../../../Services/CustomerService/foodItemService";
import cartService from "../../../Services/CustomerService/cartService";

export default function Itempopup(props) {
  const userId = localStorage.getItem("customerId");

  const { onClose, value } = props;
  console.log(value);
  //Quantity update
  const [quantity, setQuantity] = useState(0);
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
      const response = await cartService(userId, value);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  function addQuantity() {
    setQuantity(quantity + 1);
  }

  function subtractQuantity() {
    setQuantity(quantity - 1);
  }
  //data fetching
  const [datano, setDatano] = useState(null);

  return (
    <div className=" z-10 fixed dhamilo top-0 left-0 w-full h-screen flex items-center justify-center ">
      <div className="roughbg w-[550px] h-[450px] flex justify-around flex-col">
       <div className="flex gap-4">
       <img
          src="/Image/samay.png"
          alt="samay"
          className="h-[250px] w-[240px] mt-8 ml-5"
        />

        <div>
          <div className="flex mt-4">
            <h1 className="text-white font-semibold text-[25px] ">
              {data.foodName}
            </h1>
            <h1
              className="text-white absolute ml-[230px] -mt-[20px] font-bold text-[22px] hover:cursor-pointer"
              onClick={onClose}
            >
              {" "}
              <i className="fa-solid fa-xmark"></i>
            </h1>
          </div>
          <p className="text-white mt-2 ">
            {data.description}
          </p>
          <div className="flex flex-col gap-2 text-white mt-4
          ">
            <div className="flex gap-4">
              <h1 className="font-bold">Price: </h1>
              <p>Rs {data.price}</p>
            </div>
            
            <div className="flex gap-4 border items-center">
              <h1 className="font-bold">Price:</h1>
              <div className="flex jus">
                <button className="-mt-1 border-1">+</button>
                <p>{data.foodQuantity}3</p>
                <button className="border- px-2">-</button>
              </div>
            </div>
          </div>
          
        </div>
       </div>

        <button className="mb-5" onClick={addToCart}>
          {" "}
          <img
            src="/Image/redcomp.png"
            alt="order"
            className="w-[300px]  h-[70px] "
          />
          <p className="text-white  ml-[20px] font-semibold text-[28px] hover:cursor-pointer ">
            {" "}
            Add to Cart{" "}
          </p>
        </button>
      </div>
    </div>
  );
}
