import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Itempopup({ onClose }) {
  //Quantity update
  const [quantity, setQuantity] = useState(0);

  function addQuantity() {
    setQuantity(quantity + 1);
  }

  function subtractQuantity() {
    setQuantity(quantity - 1);
  }
  //data fetching
  const [datano, setDatano] = useState(null);

  return (
    <div className="dhamilo z-20 fixed inset-0 flex items-center justify-center ">
      <div className="roughbg w-[530px] h-[450px] flex flex-wrap">
        <img
          src="/Image/samay.png"
          alt="samay"
          className="h-[220px] w-[240px] mt-8 ml-5"
        />
        <h1 className="text-white font-semibold text-[25px] mx-10 my-8">
          Samay Baji
        </h1>
        <h1
          className="text-white font-bold text-[22px] ml-[24px] mt-[8px] hover:cursor-pointer"
          onClick={onClose}
        >
          {" "}
          X
        </h1>
        <p className="text-white ml-[300px] mt-[-180px]">Item Description</p>
        <table className="text-white  transform translate-y-[-110px] ml-[-100px]">
          <tr>
            <th>Price: {}</th>
          </tr>
          <tr>
            <th>Type:{}</th>
          </tr>
          <tr>
            <th>Meat:</th>
          </tr>
          <tr>
            <th>
              Quantity:{" "}
              <button
                className="border-1 border-white w-[26px] "
                onClick={subtractQuantity}
              >
                -
              </button>{" "}
              {quantity}
              <button
                className="border-1 border-white w-[26px]"
                onClick={addQuantity}
              >
                +
              </button>
            </th>
          </tr>
        </table>
        <img
          src="/Image/redcomp.png"
          alt="order"
          className="w-[300px] mx-[100px] h-[70px] mb-[20px] "
        />
        <p className="text-white mt-[-85px] ml-[220px] font-semibold text-[28px] hover:cursor-pointer ">
          {" "}
          Order{" "}
        </p>
      </div>
    </div>
  );
}
